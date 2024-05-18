import { Injectable } from '@angular/core';

interface Quiz {
  question: string;
  answer: { option: string, correct: boolean }[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [

    // 1
    {
      question: 'Baca keras2: "Asyhadu an-laa ilaa ha illalloh. Wa asyhadu anna muhammadan rosululloh". Artinya?',
      answer: [
        {
          option: 'Aku bersaksi tiada Tuhan selain Alloh, dan aku bersaksi Muhammad utusan Alloh',
          correct: true,
        },
        { option: 'sebuah doa dalam agama islam', correct: false },
        { option: 'pepatah arab', correct: false },
      ],
    },
    // 2
    {
      question: 'Pembagian fiil menurut waktunya dibagi menjadi...',
      answer: [
        {
          option: 'Madhi, Mudhari, Amr, Nahyi',
          correct: true,
        },
        {
          option: 'Madhi, Mudhari, Nahyi', correct: false
        },
        {
          option: 'Madhi, Nahyi, Amr', correct: false
        },
      ],
    },

    {
      question: 'عَمِلَ merupakan fiil dalam bentuk...  ',
      answer: [
        {
          option: 'fiil madi',
          correct: true,
        },
        {
          option: 'fiil mudhori',
          correct: false,
        },
        {
          option: 'fiil nahyi',
          correct: false,
        },
      ],
    },
    {
      question: 'يَعْمَلُ merupakan kata kerja bentuk...',
      answer: [
        {
          option: 'fiil mudhori',
          correct: true,
        },
        {
          option: 'fiil amr',
          correct: false,
        },
        {
          option: 'fiil nahyi',
          correct: false,
        },
      ],
    },

    // 3
    {
      question: 'يَفْتَحُ  artinya adalah ...',
      answer: [
        {
          option: 'Dia (laki-laki) telah membuka',
          correct: false,
        },
        {
          option: 'Dia (laki-laki) sedang/akan membuka',
          correct: true,
        },
        {
          option: 'Dia (perempuan) sedang/akan menutup',
          correct: false,
        },
      ],
    },
    // 4
    {
      question: 'يَفْتَحَانِ  artinya adalah ...',
      answer: [
        {
          option: 'Dia (laki-laki berdua) sedang/akan membuka',
          correct: true,
        },
        {
          option: 'Dia (laki-laki berdua) telah membuka',
          correct: false,
        },
        {
          option: 'Dia (laki-laki berdua) telah menutup',
          correct: false,
        },
      ],
    },
    // 5
    {
      question: 'يَفْتَحُوْنَ  artinya adalah ...',
      answer: [
        {
          option: 'Dia (laki-laki) telah membuka',
          correct: false,
        },
        {
          option: 'Dia (laki-laki) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Mereka (laki-laki) sedang/akan membuka',
          correct: true,
        },
      ],
    },
    // 6
    {
      question: 'تَفْتَحُ  artinya adalah ...',
      answer: [
        {
          option: 'Kedua pilihan benar',
          correct: true,
        },
        {
          option: 'Dia (perempuan) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Kamu (laki-laki) sedang/akan membuka',
          correct: false,
        },
      ],
    },
    // 7
    {
      question: 'تَفْتَحَانِ  artinya adalah ...',
      answer: [
        {
          option: 'Kamu (laki-laki berdua) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Kamu (perempuan berdua) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Dia (perempuan berdua) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Ketiga pilihan benar',
          correct: true,
        },
      ],
    },
    // 8
    {
      question: 'يَفْتَحْنَ  artinya adalah ...',
      answer: [
        {
          option: 'Mereka (perempuan) sedang/akan membuka',
          correct: true,
        },
        {
          option: 'Dia (perempuan) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Dia (laki-laki) sedang/akan membuka',
          correct: false,
        },
      ],
    },
    // 9
    {
      question: 'تَفْتَحُ  artinya adalah ...',
      answer: [
        {
          option: 'Kamu (laki-laki) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Dia (perempuan) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Kedua pilihan benar',
          correct: true,
        },
      ],
    },

    // 11
    {
      question: 'تَفْتَحُوْنَ  artinya adalah ...',
      answer: [
        {
          option: 'Kalian (laki-laki) sedang/akan membuka.',
          correct: true,
        },
        {
          option: 'Kalian (perempuan) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Kamu (laki-laki) sedang/akan membuka',
          correct: false,
        },
      ],
    },

    // 12
    {
      question: 'تَفْتَحِيْنَ  artinya adalah ...',
      answer: [
        {
          option: 'Kamu (laki-laki) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Kamu (perempuan) sedang/akan menutup',
          correct: false,
        },
        {
          option: 'Kamu (perempuan) sedang/akan membuka.',
          correct: true,
        },
      ],
    },



    // 14
    {
      question: 'تَفْتَحْنَ  artinya adalah ...',
      answer: [
        {
          option: 'Kamu (perempuan) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Kalian (perempuan) sedang/akan membuka.',
          correct: true,
        },
        {
          option: 'Kamu (laki-laki) sedang/akan membuka.',
          correct: false,
        },
      ],
    },
    // 15
    {
      question: 'اَفْتَحُ  artinya adalah ...',
      answer: [
        {
          option: 'Kami sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Saya sedang/akan membuka.',
          correct: true,
        },
        {
          option: 'Saya sedang/akan menutup',
          correct: false,
        },
      ],
    },
    // 16
    {
      question: 'نَفْتَحُ  artinya adalah ...',
      answer: [
        {
          option: 'Dia (laki-laki) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Dia (perempuan) sedang/akan membuka',
          correct: false,
        },
        {
          option: 'Kami sedang/akan membuka.',
          correct: true,
        },
      ],
    },
    // 17
    {
      question: 'اِفْتَحْ  artinya adalah ...',
      answer: [
        {
          option: 'Bukalah olehmu',
          correct: true,
        },
        {
          option: 'Tutuplah olehmu',
          correct: false,
        },
        {
          option: 'Bukalah oleh kalian',
          correct: false,
        },
      ],
    },
    // 18
    {
      question: 'اِفْتَحَا  artinya adalah ...',
      answer: [
        {
          option: 'Bukalah olehmu',
          correct: false,
        },
        {
          option: 'Bukalah oleh kalian berdua',
          correct: true,
        },
        {
          option: 'Bukalah oleh kalian bertiga',
          correct: false,
        },
      ],
    },
    // 19
    {
      question: 'اِفْتَحُوْ  artinya adalah ...',
      answer: [
        {
          option: 'Bukalah oleh kalian (banyak)!',
          correct: true,
        },
        {
          option: 'Bukalah olehmu',
          correct: false,
        },
        {
          option: 'Bukalah oleh dia',
          correct: false,
        },
      ],
    },
    // 20
    {
      question: 'اِفْتَحِى  artinya adalah ...',
      answer: [
        {
          option: 'Bukalah olehmu (perempuan)!',
          correct: true,
        },
        {
          option: 'Bukalah olehmu (laki-laki)!',
          correct: false,
        },
        {
          option: 'Bukalah oleh kalian',
          correct: false,
        },
      ],
    },
    // 21
    {
      question: 'اِفْتَحَا  artinya adalah ...',
      answer: [
        {
          option: 'Bukalah (oleh kalian berdua)!',
          correct: true,
        },
        {
          option: 'Bukalah olehmu (laki-laki)!',
          correct: false,
        },
        {
          option: 'Bukalah olehmu (perempuan)!',
          correct: false,
        },
      ],
    },
    // 22
    {
      question: 'اِفْتَحْنَ  artinya adalah ...',
      answer: [
        {
          option: 'Bukalah oleh kalian (laki-laki)!',
          correct: false,
        },
        {
          option: 'Bukalah olehmu (perempuan)!',
          correct: false,
        },
        {
          option: 'Bukalah oleh kalian (perempuan)!',
          correct: true,
        },
      ],
    },
    // 23
    {
      question: 'لَاتَفْتَحْ  artinya adalah ...',
      answer: [
        {
          option: 'Janganlah kau buka',
          correct: true,
        },
        {
          option: 'Janganlah dia buka',
          correct: false,
        },
        {
          option: 'Janganlah kau tutup',
          correct: false,
        },
      ],
    },
    // 24
    {
      question: 'لاَتَفْتَحَا  artinya adalah ...',
      answer: [
        {
          option: 'Janganlah kamu berdua (laki-laki saja) membuka',
          correct: false,
        },
        {
          option: 'Janganlah kamu berdua (baik laki/perempuan) membuka',
          correct: true,
        },
        {
          option: 'Janganlah kamu berdua (baik laki/perempuan) membuka',
          correct: false
        },
      ],
    },
    // 25
    {
      question: 'لاَتَفْتَحُوْا  artinya adalah ...',
      answer: [
        {
          option: 'Janganlah kalian semua (perempuan) membuka',
          correct: false,
        },
        {
          option: 'Janganlah kalian semua (laki-laki) menutup',
          correct: false,
        },
        {
          option: 'Janganlah kalian semua (laki-laki) membuka',
          correct: true,
        },
      ],
    },
    // 26
    {
      question: 'لاَتَفْتَحِي  artinya adalah ...',
      answer: [
        {
          option: 'Janganlah kalian (perempuan) membuka',
          correct: false,
        },
        {
          option: 'Janganlah kamu (perempuan) membuka',
          correct: true,
        },
        {
          option: 'Janganlah kamu (laki-laki) membuka',
          correct: false
        },
      ],
    },
    // 27
    {
      question: 'لاَتَفْتَحْنَ  artinya adalah ...',
      answer: [
        {
          option: 'Janganlah kalian semua (perempuan) membuka',
          correct: true,
        },
        {
          option: 'Janganlah kalian semua (laki-laki) membuka',
          correct: false,
        },
        {
          option: 'Janganlah kamu (perempuan) membuka',
          correct: false,
        },
      ],
    }


    // 3
    // {
    //   question: '',
    //   answer: [
    //     { option: '', 
    //       correct: 
    //     },
    //     {
    //       option: '',
    //       correct:
    //     },
    //     {
    //       option: '',
    //       correct:
    //     },
    //   ],
    // }

  ]
  getQuizzes() {
    return this.quizzes;
  }
}
