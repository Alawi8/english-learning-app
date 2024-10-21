<template>
  <div class="texts">
    <h2 class="text-2xl font-bold">قطع نصية مترجمة</h2>
    <div v-if="error" class="error-message">
      <p>حدث خطأ أثناء جلب البيانات. الرجاء المحاولة مرة أخرى لاحقًا.</p>
    </div>
    <div v-else>
      <div v-for="(text, index) in texts" :key="index" class="text-card">
        <h3 class="text-xl font-semibold">{{ text.title }}</h3>
        <div class="words-container">
          <span 
            v-for="(word, j) in text.words" 
            :key="j"
            :class="{'highlighted-word': word === currentWord}" 
            class="clickable-word"
            @click="openDictionary(word)"
          >
            {{ word }}
          </span>
        </div>
        <div class="controls">
          <button @click="startReading(text.content)" class="btn-read">اقرأ النص</button>
          <button @click="stopReading" class="btn-stop">إيقاف الصوت</button>
        </div>
        <p class="text-gray-500 mt-2">{{ text.translation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const texts = ref([]);
    const error = ref(false);
    const isSpeaking = ref(false);
    const currentWord = ref('');
    let synth;
    let voices;

    onMounted(async () => {
      synth = window.speechSynthesis;
      await loadVoices();
      fetchTexts();
    });

    const loadVoices = () => {
      return new Promise((resolve) => {
        voices = synth.getVoices();
        if (voices.length) return resolve();

        const interval = setInterval(() => {
          voices = synth.getVoices();
          if (voices.length) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });
    };

    const fetchTexts = async () => {
      try {
        const response = await axios.get('https://store.meshcah.net/wp-json/wp/v2/english/');
        texts.value = response.data.map(item => ({
          title: item.title.rendered,
          content: item.acf.english || 'نص غير متوفر',
          translation: item.acf.arabic || 'ترجمة غير متوفرة',
          words: (item.acf.english || '').split(' ')
        }));
      } catch (err) {
        error.value = true;
        console.error('Error fetching data:', err);
      }
    };

    const startReading = (content) => {
      if (isSpeaking.value) return;
      isSpeaking.value = true;

      // تقسيم النص إلى جمل
      const sentences = content.split(/(?<=[.!?])\s+/);
      readSentences(sentences);
    };

    const readSentences = (sentences) => {
      if (!sentences.length) {
        isSpeaking.value = false;
        currentWord.value = '';
        return;
      }

      const sentence = sentences.shift();
      const words = sentence.split(' '); // تقسيم الجملة إلى كلمات لتحديد الكلمة الحالية
      let wordIndex = 0;

      const utterance = new SpeechSynthesisUtterance(sentence);
      const bestVoice = voices.find(voice => voice.lang === 'en-US');
      utterance.voice = bestVoice || voices[0]; // استخدام الصوت الافتراضي إذا لم يتوفر صوت مفضل
      utterance.rate = 0.95;
      utterance.pitch = 1;

      utterance.onboundary = (event) => {
        // تحديث الكلمة الحالية عند كل "حدود" (مثل الكلمات)
        if (event.name === 'word') {
          currentWord.value = words[wordIndex] || '';
          wordIndex++;
        }
      };

      utterance.onend = () => {
        currentWord.value = '';
        // إضافة تأخير قبل قراءة الجملة التالية
        setTimeout(() => readSentences(sentences), 500);
      };

      synth.speak(utterance);
    };

    const stopReading = () => {
      synth.cancel();
      isSpeaking.value = false;
      currentWord.value = '';
    };

    const openDictionary = (word) => {
      const dictionaryUrl = `https://dictionary.cambridge.org/dictionary/english/${word}`;
      window.open(dictionaryUrl, '_blank');
    };

    return {
      texts,
      error,
      currentWord,
      startReading,
      stopReading,
      openDictionary
    };
  }
};
</script>

<style scoped>
.text-card {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.words-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.clickable-word {
  cursor: pointer;
}

.highlighted-word {
  background-color: yellow; /* تمييز الكلمة الحالية */
}

.btn-read, .btn-stop {
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-stop {
  background-color: #f44336;
}

.btn-read:hover {
  background-color: #45a049;
}

.btn-stop:hover {
  background-color: #e53935;
}

.error-message {
  color: red;
  font-size: 1.2rem;
  margin: 1rem 0;
}
</style>
