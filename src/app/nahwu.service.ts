import { Injectable } from '@angular/core';

interface Nahwu {
  question: string;
  answer: { option: string, correct: boolean }[];
}

@Injectable({
  providedIn: 'root'
})
export class NahwuService {
  nahwus: Nahwu[] =
    [
      {
        question: 'Isim yang belum jelas (masih umum)  disebut',
        answer: [
          {
            option: 'isim mabni',
            correct: false,
          },
          {
            option: 'isim murob', correct: false
          },
          { option: 'isim nakiroh', correct: true },
          { option: 'isim marifat', correct: false }
        ]
      },
      {
        question: 'Isim yang sudah jelas disebut?',
        answer: [
          {
            option: 'isim mabni',
            correct: false,
          },
          {
            option: 'isim murob', correct: false
          },
          { option: 'isim nakiroh', correct: false },
          { option: 'isim marifat', correct: true }
        ]
      },
      {
        question: 'Kata-kata yang termasuk isim nakiroh adalah...',
        answer: [
          {
            option: 'محمد - زينب - المسجد',
            correct: false,
          },
          {
            option: 'أنا - هو - أنت', correct: false
          },
          { option: 'سيارة - مدرسة - قلم', correct: true },
          { option: 'المسجد - القرآن - مريم', correct: false }
        ]
      },
      {
        question: 'Kata-kata yang termasuk isim Maqshur adalah...',
        answer: [
          {
            option: 'عصا - مصطفى - دنيا',
            correct: true,
          },
          {
            option: 'سماء - بناء - حمراء', correct: false
          },
          { option: 'القاضي - المربي - الماشي', correct: false },
          { option: 'هاد - راع - قاض', correct: false }
        ]
      },
      {
        question: 'Kata-kata yang termasuk isim Manqush adalah...',
        answer: [
          {
            option: 'القاضي - المربي - الماشي',
            correct: true,
          },
          {
            option: 'عصا - مصطفى - دنيا', correct: false
          },
          { option: 'سماء - بناء - حمراء', correct: false },
          { option: 'مسلمون - مصلحون - مجاهدون', correct: false }
        ]
      },
      {
        question: 'Manakah kata-kata yang termasuk isim Tashghir?',
        answer: [
          {
            option: 'أحسن - أكبر',
            correct: false,
          },
          {
            option: 'عبيد - جبيل', correct: true
          },
          { option: 'مسلمين - قلمين', correct: false },
          { option: 'عربي - هندي', correct: false }
        ]
      },
      {
        question: 'Isim Tahghir dari kata نجم adalah... ',
        answer: [
          {
            option: 'نجوم',
            correct: false,
          },
          {
            option: 'نجيم', correct: true
          },
          { option: 'أنجم', correct: false },
          { option: 'نجمان', correct: false }
        ]
      },
      {
        question: 'Manakah kata-kata yang termasuk isim  Nisbah? ',
        answer: [
          {
            option: 'عربي - عربية',
            correct: true,
          },
          {
            option: 'سبورة - سورة', correct: false
          },
          { option: 'أبعد - أصغر', correct: false },
          { option: 'مدرس - مدرسة', correct: false }
        ]
      },
      {
        question: 'Dari kata-kata berikut, manakah yang termasuk isim Tafdhil? ',
        answer: [
          {
            option: 'مجتهدون - مسلمات',
            correct: false,
          },
          {
            option: 'مدرسات - مهندسون', correct: false
          },
          { option: 'أحسن - أكبر', correct: true },
          { option: 'طالبان - طلاب', correct: false }
        ]
      },
      {
        question: 'Isim Tafdhil dari kata قريب adalah ...  ',
        answer: [
          {
            option: 'قربان',
            correct: false,
          },
          {
            option: 'قريبة', correct: false
          },
          { option: 'قريبتان', correct: false },
          { option: 'أقرب', correct: true }
        ]
      },
      {
        question: 'Isim yang menunjukkan arti laki-laki disebut',
        answer: [
          {
            option: 'Isim mabni',
            correct: false,
          },
          {
            option: 'Isim murob', correct: false
          },
          { option: 'Isim mudzakkar', correct: true },
          { option: 'Isim muannats', correct: false }
        ]
      },
      {
        question: 'Isim yang menunjukkan arti perempuan disebut?',
        answer: [
          {
            option: 'Isim mabni',
            correct: false,
          },
          {
            option: 'Isim murob', correct: false
          },
          { option: 'Isim mudzakkar', correct: false },
          { option: 'Isim muannats', correct: true }
        ]
      },
      {
        question: 'Kata-Kata yang termasuk isim mudzakkar adalah...',
        answer: [
          {
            option: 'أمنة - نار',
            correct: false,
          },
          {
            option: 'مسجد - بيت', correct: true
          },
          { option: 'عين - أذن', correct: false },
          { option: 'سيارة - مدرسة', correct: false }
        ]
      },
      {
        question: 'Kata-kata yang tidak termasuk isim mudzakkar adalah... ',
        answer: [
          {
            option: 'بيت - مسجد',
            correct: false,
          },
          {
            option: 'أرض - شمس', correct: true
          },
          { option: 'كتاب - قلم', correct: false },
          { option: 'مكتب - سرير', correct: false }
        ]
      },
      {
        question: 'Manakah kata yang termasuk isim Mufrod?',
        answer: [
          {
            option: 'بقرة - مجلة',
            correct: true,
          },
          {
            option: 'كافرة - أقلام', correct: false
          },
          { option: 'صالحان - مجتهدة', correct: false },
          { option: 'مسلمون - مصلحون', correct: false }
        ]
      },
      {
        question: 'Manakah kata-kata yang termasuk isim Mutsanna?',
        answer: [
          {
            option: 'بيتان - مدرسون',
            correct: false,
          },
          {
            option: 'مسلمان - محسنان', correct: true
          },
          { option: 'مسلمين - قلمين', correct: false },
          { option: 'سورتان - جميلة', correct: false }
        ]
      },
      {
        question: 'Manakah kata-kata yang termasuk isim Jama Mudzakkar?',
        answer: [
          {
            option: 'كفار - كافرون',
            correct: false,
          },
          {
            option: 'صالحون - مسلمين', correct: true
          },
          { option: 'منافقون - منافقات', correct: false },
          { option: 'مسلمين - مجتهدات', correct: false }
        ]
      },
      {
        question: 'Manakah kata-kata yang bukan termasuk isim Jama Muannats?',
        answer: [
          {
            option: 'طبيبان - مدرسون',
            correct: true,
          },
          {
            option: 'سبورات - مسلمات', correct: false
          },
          { option: 'كافرات - منافقات', correct: false },
          { option: 'مديرات - مسلمات', correct: false }
        ]
      },
      {
        question: 'Dari kata-kata berikut, manakah yang termasuk Jama Taksir?',
        answer: [
          {
            option: 'مجتهدون - مسلمات',
            correct: false,
          },
          {
            option: 'مدرسات - مهندسون', correct: false
          },
          { option: 'أقلام - رجال', correct: true },
          { option: 'طالبان - طلاب', correct: false }
        ]
      },
      {
        question: 'Dari kata-kata berikut, manakah yang bukan termasuk Jama Taksir?',
        answer: [
          {
            option: 'رجال - مساجد',
            correct: false,
          },
          {
            option: 'طلاب - علماء', correct: false
          },
          { option: 'تجار - ضيوف', correct: false },
          { option: 'عالمون - تاجرات', correct: true }
        ]
      },
      {
        question: 'Bagaimana mengetahui cara baca kata yang mirip seperti سنة (tahun) dan سنة (sunnah)?',
        answer: [
          {
            option: 'Memahami struktur kalimat',
            correct: false,
          },
          {
            option: 'Memahami kaidah bahasa Arab', correct: false
          },
          { option: 'Memahami isi terjemah kalimat', correct: true },
          { option: 'Memahami ilmu Nahwu', correct: false }
        ]
      },
      {
        question: 'Kata سنة dalam kalimat: حكم صلاة العيد سنة  dibaca...',
        answer: [
          {
            option: 'Sanatun',
            correct: false,
          },
          {
            option: 'Sinnatu', correct: false
          },
          { option: 'Suntun', correct: false },
          { option: 'Sunnatun', correct: true }
        ]
      },
      {
        question: 'Kata قبل dalam kalimat: خرج المدرس قبل الأذان  dibaca...',
        answer: [
          {
            option: 'Qibala',
            correct: false,
          },
          {
            option: 'Qobla', correct: true
          },
          { option: 'Qobbala', correct: false },
          { option: 'Qobila', correct: false }
        ]
      },
      {
        question: 'Kata عالم dalam kalimat : محمد هو عالم في المدينة dibaca...',
        answer: [
          {
            option: 'Aalamun',
            correct: false,
          },
          {
            option: 'Aalimun', correct: true
          },
          { option: 'Aalamin', correct: false },
          { option: 'Aalumun', correct: false }
        ]
      },
      {
        question: 'Apa yang disebut dengan wazan dalam bahasa Arab?',
        answer: [
          {
            option: 'Timbangan untuk kata yang memiliki pola sama',
            correct: true,
          },
          {
            option: 'Posisi subjek dalam kalimat', correct: false
          },
          { option: 'Kata yang tidak berubah harokat akhirnya', correct: false },
          { option: 'Kata kerja', correct: false }
        ]
      },
      {
        question: 'Bentuk kata ini تحسين mengikut wazan apa?',
        answer: [
          {
            option: 'أفعل',
            correct: false,
          },
          {
            option: 'تفعيل', correct: true
          },
          { option: 'فعل', correct: false },
          { option: 'مفعول', correct: false }
        ]
      },
      {
        question: 'Dari kalimat berikut: نصر المسلمون حامدا في الملعب manakah yang termasuk Fiil?',
        answer: [
          {
            option: 'حامدا',
            correct: false,
          },
          {
            option: 'نصر', correct: true
          },
          { option: 'في', correct: false },
          { option: 'الملعب', correct: false }
        ]
      },
      {
        question: 'Dari kalimat berikut : ذهب الطالب إلى المدرسة manakah yang termasuk kalimah Huruf?',
        answer: [
          {
            option: 'إلى',
            correct: true,
          },
          {
            option: 'ذهب', correct: false
          },
          { option: 'الطالب', correct: false },
          { option: 'المدرسة', correct: false }
        ]
      },
      {
        question: 'Manakah kata yang termasuk kalimah Fiil?',
        answer: [
          {
            option: 'قرد - علم',
            correct: false,
          },
          {
            option: 'جمل - ترك', correct: false
          },
          { option: 'قلم - عبد', correct: false },
          { option: 'جلس - قرأ', correct: true }
        ]
      },
      {
        question: 'Dari kata-kata berikut, manakah yang termasuk Kalimah Isim?',
        answer: [
          {
            option: 'مجلة - المسجد - قد قام',
            correct: false,
          },
          {
            option: 'مجلة - المسجد - سيقول', correct: false
          },
          { option: 'مجلة - المسجد - كتبت', correct: false },
          { option: 'مجلة - المسجد - مسلمين', correct: true }
        ]
      },
      {
        question: 'Tujuan utama belajar di sekolah baca kitab (SBK) adalah ...',
        answer: [
          {
            option: 'Berbicara bahasa Arab',
            correct: false,
          },
          {
            option: 'Menyusun teks Arab', correct: false
          },
          { option: 'Membaca dan Menerjemah teks Arab', correct: true },
          { option: 'Mendengar bahasa Arab', correct: false }
        ]
      },
      {
        question: 'Faktor apa saja agar cepat bisa membaca dan menerjemah teks Arab',
        answer: [
          {
            option: 'Faktor Kaidah',
            correct: false,
          },
          {
            option: 'Faktor Kosa Kata (Mufrodat)', correct: false
          },
          { option: 'Faktor Praktek', correct: false },
          { option: 'Semua jawaban benar', correct: true }
        ]
      },
      {
        question: 'Bagaimana cara menghapal kosa kata?',
        answer: [
          {
            option: 'Direkam lalu didengar',
            correct: false,
          },
          {
            option: 'Ditulis di kertas lalu dihapalkan', correct: false
          },
          { option: 'Ditempel di dinding lalu dihapalkan', correct: false },
          { option: 'Semua jawaban benar', correct: true }
        ]
      },
      {
        question: 'Ilmu untuk mengetahui harokat atau bentuk akhir suatu kata beserta posisinya di dalam kalimat disebut...',
        answer: [
          {
            option: 'Ilmu Shorof',
            correct: false,
          },
          {
            option: 'Ilmu Balaghoh', correct: false
          },
          { option: 'Ilmu Nahwu', correct: true },
          { option: 'Ilmu Mantiq', correct: false }
        ]
      },
      {
        question: 'Ilmu untuk mengetahui perubahan suatu kata menjadi bentuk lain beserta maknanya disebut... ',
        answer: [
          {
            option: 'Ilmu Shorof',
            correct: true,
          },
          {
            option: 'Ilmu Balaghoh', correct: false
          },
          { option: 'Ilmu Nahwu', correct: false },
          { option: 'Ilmu Mantiq', correct: false }
        ]
      },
      {
        question: 'Kata (كلمة) dalam bahasa Arab ada tiga macam, yaitu?',
        answer: [
          {
            option: 'Isim, mabni, huruf',
            correct: false,
          },
          {
            option: 'Isim, mashdar, fiil', correct: false
          },
          { option: 'Isim, fiil, huruf', correct: true },
          { option: 'Isim, fail, huruf', correct: false }
        ]
      },
      {
        question: 'Kata yang harokat dan bentuk akhirnya tetap atau tidak berubah disebut?',
        answer: [
          {
            option: 'Murob',
            correct: false,
          },
          {
            option: 'Mabni', correct: true
          },
          { option: 'Maf ul', correct: false },
          { option: 'Majhul', correct: false }
        ]
      },
      {
        question: 'Kata yang harokat dan bentuk akhirnya bisa berubah-ubah disebut? ',
        answer: [
          {
            option: "Mu'rob",
            correct: true,
          },
          {
            option: 'Mabni', correct: false
          },
          { option: "Maf'ul", correct: false },
          { option: 'Majhul', correct: false }
        ]
      },
      {
        question: 'Manakah kata yang termasuk mabni?',
        answer: [
          {
            option: 'قرد',
            correct: false,
          },
          {
            option: 'جمل', correct: false
          },
          { option: 'قلم', correct: false },
          { option: 'أنت', correct: true }
        ]
      },
      {
        question: "Manakah yang termasuk Mu'rob?",
        answer: [
          {
            option: 'مسجد',
            correct: true,
          },
          {
            option: 'أنا', correct: false
          },
          { option: 'هذا', correct: false },
          { option: 'أنت', correct: false }
        ]
      },
      {
        question: "Apa yang dimaksud dengan isim Ghoiru Munshorif?",
        answer: [
          {
            option: 'Isim yang tidak boleh alif lam',
            correct: false,
          },
          {
            option: 'Isim yang tidak boleh ta marbuthoh', correct: false
          },
          { option: 'Isim yang tidak boleh tanwin', correct: true },
          { option: 'Isim yang tidak boleh fathah', correct: false }
        ]
      },
      {
        question: "Manakah kata-kata berikut yang termasuk isim Ghoiru Munshorif?",
        answer: [
          {
            option: 'مسجد - مسلم',
            correct: false,
          },
          {
            option: 'زبد - علي', correct: false
          },
          { option: 'مدينة - قرية', correct: false },
          { option: 'أسامة - مكة', correct: true }
        ]
      },
      {
        question: "Manakah kata-kata berikut yang termasuk isim Ghoiru Munshorif?",
        answer: [
          {
            option: 'محمد - زينب - المسجد',
            correct: false,
          },
          {
            option: 'مساجد - مناديل - علماء', correct: true
          },
          { option: 'أقلام - جدد - ضيوف', correct: false },
          { option: 'المسجد - القرآن - مريم', correct: false }
        ]
      },
      {
        question: "Manakah kata-kata berikut yang tidak termasuk isim Ghoiru Munshorif?",
        answer: [
          {
            option: 'كسلان - جوعان - ملأن',
            correct: false,
          },
          {
            option: 'أحمد - أنور - أسود', correct: false
          },
          { option: 'حمراء - علماء - سوداء', correct: false },
          { option: 'هاد - راع - ماش', correct: true }
        ]
      },
      {
        question: "Manakah kata-kata berikut yang tidak termasuk isim Ghoiru Munshorif?",
        answer: [
          {
            option: 'زينب - فاطمة - سعاد',
            correct: false,
          },
          {
            option: 'مكة - بغداد - جدة', correct: false
          },
          { option: 'محمد - حامد - مكتب', correct: true },
          { option: 'ثلاث - رباع - خماس', correct: false }
        ]
      },
      {
        question: "Isim yang menunjukkan atau mengandung arti 'sangat' adalah",
        answer: [
          {
            option: 'isim Jamid',
            correct: false,
          },
          {
            option: 'Isim Tafdhil', correct: false
          },
          { option: 'Shighot Mubalaghoh', correct: true },
          { option: 'Isim Tashghir', correct: false }
        ]
      },
      {
        question: "Manakah kata-kata yang berbentuk shighot mubalaghoh?",
        answer: [
          {
            option: 'عالم - معلوم',
            correct: false,
          },
          {
            option: 'علام - غفور', correct: true
          },
          { option: 'كسلان - جوعان', correct: false },
          { option: 'أكبر - أصغر', correct: false }
        ]
      },
      {
        question: "Berikut ini adalah bentuk shighot mubalaghoh, kecuali...",
        answer: [
          {
            option: 'فتاح - غفار',
            correct: false,
          },
          {
            option: 'سميع - بصير', correct: false
          },
          { option: 'غفور - صبور', correct: false },
          { option: 'أرحم - أكبر', correct: true }
        ]
      },
      {
        question: "Manakah kata-kata berikut yang termasuk isim jamid?",
        answer: [
          {
            option: 'حامد - جالس',
            correct: false,
          },
          {
            option: 'مسجد - مكتب', correct: false
          },
          { option: 'جبل - رجل', correct: true },
          { option: 'مرحوم - مغفور', correct: false }
        ]
      },
      {
        question: "Berikut ini adalah kata-kata isim musytaq, kecuali...",
        answer: [
          {
            option: 'كاتب - راحم',
            correct: false,
          },
          {
            option: 'معلوم - معروف', correct: false
          },
          { option: 'سميع - بصير', correct: false },
          { option: 'حيوان - نهر', correct: true }
        ]
      },
      {
        question: "Isim yang harokat dan bentuk akhirnya tetap disebut?",
        answer: [
          {
            option: 'Isim Nakiroh',
            correct: false,
          },
          {
            option: 'Isim Mufrod', correct: false
          },
          { option: 'Isim Mabni', correct: true },
          { option: "Isim Mu'rob", correct: false }
        ]
      },
      {
        question: "Kata ganti atau dhomir ada tiga macam yaitu?",
        answer: [
          {
            option: "Mutakallim, Mukhotob, Ma'rifat",
            correct: false,
          },
          {
            option: 'Mutakallim, Mufroda, Ghoib', correct: false
          },
          { option: 'Mutakallim, Jamak, Nakiroh', correct: false },
          { option: "Mutakallim, Mukhotob, Ghoib", correct: true }
        ]
      },
      {
        question: "Manakah Isim Isyaroh yang bermakna 'ini'?",
        answer: [
          {
            option: "ذلك - تلك",
            correct: false,
          },
          {
            option: 'هذا - هذه', correct: true
          },
          { option: 'الذي - التي', correct: false },
          { option: "ما - من", correct: false }
        ]
      },
      {
        question: "Manakah Isim maushul yang bermakna 'yang'?",
        answer: [
          {
            option: "متى - أين",
            correct: false,
          },
          {
            option: 'ذلك - تلك', correct: false
          },
          { option: 'هذا - هذه', correct: false },
          { option: "الذي - التي", correct: true }
        ]
      },
      {
        question: "Berikut ini yang termasuk isim Mabni, kecuali?",
        answer: [
          {
            option: "Isim Dhomir, Isim Isyaroh",
            correct: false,
          },
          {
            option: 'Isim Maushul, Isim Istifham', correct: false
          },
          { option: 'Isim Manqhus, Isim Nakiroh', correct: true },
          { option: "Isim Syarat, Isim Fi'il", correct: false }
        ]
      },
      {
        question: "Manakah kata-kata yang termasuk dhomir Mutakallim?",
        answer: [
          {
            option: "أنت - أنتم",
            correct: false,
          },
          {
            option: 'هو - هم', correct: false
          },
          { option: 'أنا - نحن', correct: true },
          { option: "هما - هن", correct: false }
        ]
      },
      {
        question: "قلم artinya pulpen, 'pulpen dia perempuan' bahasa Arabnya?",
        answer: [
          {
            option: "قلمك",
            correct: false,
          },
          {
            option: 'قلمها', correct: true
          },
          { option: 'قلمه', correct: false },
          { option: "قلمنا", correct: false }
        ]
      },
      {
        question: "دين artinya agama, 'agama kalian perempuan' bahasa Arabnya?",
        answer: [
          {
            option: "دينكم",
            correct: false,
          },
          {
            option: 'ديننا', correct: false
          },
          { option: 'دينهم', correct: false },
          { option: "دينكن", correct: true }
        ]
      },
      {
        question: "نصرت artinya saya menolong, 'saya menolong mereka' bahasa Arabnya?",
        answer: [
          {
            option: "نصرتها",
            correct: false,
          },
          {
            option: 'نصرتكم', correct: false
          },
          { option: 'نصرتهم', correct: true },
          { option: "نصرتهن", correct: false }
        ]
      },
      {
        question: "نظرنا artinya kami melihat, 'kami melihat kamu' bahasa Arabnya?",
        answer: [
          {
            option: "نظرناه",
            correct: false,
          },
          {
            option: 'نظرناهم', correct: false
          },
          { option: 'نظرناها', correct: false },
          { option: "نظرناك", correct: true }
        ]
      },
      {
        question: "Isim yang harokat dan bentuk akhirnya berubah-ubah sesuai posisi dalam kalimat disebut?",
        answer: [
          {
            option: "Isim Nakiroh",
            correct: false,
          },
          {
            option: 'Isim Mufrod', correct: false
          },
          { option: 'Isim Mabni', correct: false },
          { option: "Isim Mu'rob", correct: true }
        ]
      },
      {
        question: "Posisi isim yang berakhiran dhommah disebut?",
        answer: [
          {
            option: "Isim Naqish",
            correct: false,
          },
          {
            option: 'Isim Majrur', correct: false
          },
          { option: 'Isim Manshub', correct: false },
          { option: "Isim Marfu'", correct: true }
        ]
      },
      {
        question: "Berikut ini adalah posisi isim marfu' dalam kalimat, kecuali... ",
        answer: [
          {
            option: "Mubtada, Khobar",
            correct: false,
          },
          {
            option: 'Fail, Naibul Fail', correct: false
          },
          { option: "Na'at, Man'ut", correct: true },
          { option: "Isim Kaana, Khobar Inna", correct: false }
        ]
      },
      {
        question: "Kata جديد dalam kalimat : التاجر جديد berposisi sebagai apa?",
        answer: [
          {
            option: "Mubtada",
            correct: false,
          },
          {
            option: "Fa'il", correct: false
          },
          { option: "Isim", correct: false },
          { option: "Khobar", correct: true }
        ]
      },
      {
        question: "Kata جند الله dalam kalimat : حضر جند الله  berposisi sebagai apa?",
        answer: [
          {
            option: "Mubtada",
            correct: false,
          },
          {
            option: "Khobar", correct: false
          },
          { option: "Fa'il", correct: true },
          { option: "Naibul Fa'il", correct: false }
        ]
      },
      {
        question: "Kata رجل dalam kalimat : في المسجد رجل غريب  berposisi sebagai apa?",
        answer: [
          {
            option: "Mubtada",
            correct: false,
          },
          {
            option: "Khobar", correct: false
          },
          { option: "Mubtada Mu'akkhor", correct: true },
          { option: "Khobar Muqoddam", correct: false }
        ]
      },
      {
        question: "Kata المسلمون dalam kalimat : صلى المسلمون في المسجد berposisi sebagai apa?",
        answer: [
          {
            option: "Mubtada",
            correct: false,
          },
          {
            option: "Khobar", correct: false
          },
          { option: "Fa'il", correct: true },
          { option: "Na'ibul Fa'il", correct: false }
        ]
      },
      {
        question: "Kata الطالبان dalam kalimat : الطالبان ماهران  berposisi sebagai apa?",
        answer: [
          {
            option: "Mubtada",
            correct: true,
          },
          {
            option: "Khobar", correct: false
          },
          { option: "Fa'il", correct: false },
          { option: "Na'ibul Fa'il", correct: false }
        ]
      },
      {
        question: "Bentuk isim mutsanna', jika berposisi sebagai isim marfu' menggunakan imbuhan?",
        answer: [
          {
            option: "Alif Nun ان",
            correct: true,
          },
          {
            option: "Wawu Nun ون", correct: false
          },
          { option: "Alif Ta ات", correct: false },
          { option: "Ya Nun ين", correct: false }
        ]
      },
      {
        question: "Bentuk isim jama' mudzakkar', jika berposisi sebagai isim marfu' menggunakan imbuhan?",
        answer: [
          {
            option: "Alif Nun ان",
            correct: false,
          },
          {
            option: "Wawu Nun ون", correct: true
          },
          { option: "Alif Ta ات", correct: false },
          { option: "Ya Nun ين", correct: false }
        ]
      },
      {
        question: "Posisi isim yang berakhiran kasroh disebut?",
        answer: [
          {
            option: "Isim Naqish",
            correct: false,
          },
          {
            option: "Isim Majrur", correct: true
          },
          { option: "Isim Manshub", correct: false },
          { option: "Isim Marfu'", correct: false }
        ]
      },
      {
        question: "Berikut ini adalah posisi isim majrur, kecuali?",
        answer: [
          {
            option: "Setelah Huruf Jar",
            correct: false,
          },
          {
            option: "Setelah zhorof", correct: false
          },
          { option: "Mudhof Ilaih", correct: false },
          { option: "Mubtada Khobar", correct: true }
        ]
      },
      {
        question: "Berikut ini adalah termasuk huruf jar, kecuali...",
        answer: [
          {
            option: "من - على",
            correct: false,
          },
          {
            option: "إلى - في", correct: false
          },
          { option: "لم - لن", correct: true },
          { option: "عن - ب", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  المكتبة dalam kalimat berikut adalah...الطلاب في المكتبة",
        answer: [
          {
            option: "dhommah",
            correct: false,
          },
          {
            option: "fathah", correct: false
          },
          { option: "sukun", correct: false },
          { option: "kasroh", correct: true }
        ]
      },
      {
        question: "Harokat akhir kata  خمسة dalam kalimat berikut adalah... أركان الإسلام خمسة",
        answer: [
          {
            option: "dhommah",
            correct: true,
          },
          {
            option: "fathah", correct: false
          },
          { option: "sukun", correct: false },
          { option: "kasroh", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الإسلام  dalam kalimat berikut adalah... أركان الإسلام خمسة",
        answer: [
          {
            option: "dhommah",
            correct: false,
          },
          {
            option: "fathah", correct: false
          },
          { option: "sukun", correct: false },
          { option: "kasroh", correct: true }
        ]
      },
      {
        question: "Harokat akhir kata  رسول الله  dalam kalimat berikut adalah... الصلاة والسلام على رسول الله",
        answer: [
          {
            option: "dhommah, kasroh",
            correct: false,
          },
          {
            option: "fathah, dhommah", correct: false
          },
          { option: "kasroh, kasroh", correct: true },
          { option: "kasroh, sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  جميع  dalam kalimat berikut adalah... الإسلام دين جميع الأنبياء",
        answer: [
          {
            option: "dhommah",
            correct: false,
          },
          {
            option: "fathah", correct: false
          },
          { option: "kasroh", correct: true },
          { option: "sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  دين  dalam kalimat berikut adalah... الإسلام دين جميع الأنبياء",
        answer: [
          {
            option: "dhommah",
            correct: true,
          },
          {
            option: "fathah", correct: false
          },
          { option: "kasroh", correct: false },
          { option: "sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الإسلام  dalam kalimat berikut adalah... الشهادتان هما مفتاح الإسلام",
        answer: [
          {
            option: "dhommah",
            correct: false,
          },
          {
            option: "fathah", correct: false
          },
          { option: "kasroh", correct: true },
          { option: "sukun", correct: false }
        ]
      },
      {
        question: "1. Berikut ini termasuk zhorof, kecuali?",
        answer: [
          {
            option: "أمام - وراء - خلف",
            correct: false,
          },
          {
            option: "من - عن - في", correct: true
          },
          { option: "عند - بين - مع", correct: false },
          { option: "بعد - قبل - تحت", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الفصل dalam kalimat : جلس المدرسون أمام الفصل adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Saat berposisi majrur, isim mutsanna dan jama' mudzakkar menggunakan imbuhan...",
        answer: [
          {
            option: "Alif Nun ان",
            correct: false,
          },
          {
            option: "Wawu Nun ون", correct: false
          },
          { option: "Ya Nun ين", correct: true },
          { option: "Alif Ta ات", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  زينب dalam kalimat : أمنة مع زينب في السوق adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Sukun", correct: false },
          { option: "Kasroh", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  عثمان  dan باكستان dalam kalimat : هذا ابن عثمان من باكستان  adalah...",
        answer: [
          {
            option: "Dhommah, Dhommah",
            correct: false,
          },
          {
            option: "Fathah, Kasroh", correct: false
          },
          { option: "Kasroh, kasroh", correct: false },
          { option: "Fathah, Fathah", correct: true }
        ]
      },
      {
        question: "Dhomir pada fi'il Madhi  آمنوا (... beriman) adalah... ",
        answer: [
          {
            option: "Dhomir هم",
            correct: true,
          },
          {
            option: "Dhomir هن", correct: false
          },
          { option: "Dhomir أنتم", correct: false },
          { option: "Dhomir نحن", correct: false }
        ]
      },
      {
        question: "Dhomir pada fi'il Madhi  حفظنا (... menghafal) adalah... ",
        answer: [
          {
            option: "Dhomir أنا",
            correct: false,
          },
          {
            option: "Dhomir أنت", correct: false
          },
          { option: "Dhomir نحن", correct: true },
          { option: "Dhomir هم", correct: false }
        ]
      },
      {
        question: "Dhomir pada fi'il Mudhori  يعبدون  (... beribadah) adalah... ",
        answer: [
          {
            option: "Kami",
            correct: false,
          },
          {
            option: "Saya", correct: false
          },
          { option: "Mereka", correct: true },
          { option: "Kalian", correct: false }
        ]
      },
      {
        question: "Dhomir pada fi'il Mudhori  تأمرون (... menyuruh) adalah...",
        answer: [
          {
            option: "Kami",
            correct: false,
          },
          {
            option: "Kalian", correct: true
          },
          { option: "Dia", correct: false },
          { option: "Mereka", correct: false }
        ]
      },
      {
        question: "Dhomir pada fi'il Amr  اعبدوا (... beribadahlah) adalah... ",
        answer: [
          {
            option: "هم",
            correct: false,
          },
          {
            option: "هن", correct: false
          },
          { option: "أنتم", correct: true },
          { option: "أنتن", correct: false }
        ]
      },
      {
        question: "Posisi isim yang berakhiran fathah disebut?",
        answer: [
          {
            option: "Isim Marfu'",
            correct: false,
          },
          {
            option: "Isim Manshub", correct: true
          },
          { option: "Isim Majrur", correct: false },
          { option: "Isim Mabni", correct: false }
        ]
      },
      {
        question: "Saat berposisi manshub, jama' mu'annats salim berharokat apa?",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  المسلمات dalam kalimat : نصر محمد المسلمات  adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الشمس  dalam kalimat : خلق الله الشمس adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Sukun", correct: false },
          { option: "Kasroh", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  ربك  dalam kalimat : واعبد ربك  adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  علي  dalam kalimat : يا علي ، من هذا؟ adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: true,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  رسول الله  dalam kalimat : يا رسول الله، أخبرني عن الساعة adalah...",
        answer: [
          {
            option: "Dhommah, Fathah",
            correct: false,
          },
          {
            option: "Fathah, Kasroh", correct: true
          },
          { option: "Kasroh, Sukun", correct: false },
          { option: "Kasroh, Kasroh", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  معبود  dalam kalimat : لا معبود بحق إلا الله adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الله  dalam kalimat : اعبدوا الله adalah fathah, posisinya sebagai apa...?",
        answer: [
          {
            option: "Mubtada",
            correct: false,
          },
          {
            option: "Khobar", correct: false
          },
          { option: "Maf'ul Bih", correct: true },
          { option: "Munada", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الكعبة  dalam kalimat : يا رب الكعبة، انصر من نصر الدين adalah kasroh, posisinya sebagai apa...?",
        answer: [
          {
            option: "Mubtada",
            correct: false,
          },
          {
            option: "Khobar", correct: false
          },
          { option: "Maf'ul Bih", correct: false },
          { option: "Mudhol Ilaih", correct: true }
        ]
      },
      {
        question: "Harokat akhir kata  المشرك  dalam kalimat : إن المشرك في النار  adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الأعمال  dalam kalimat : إنما الأعمال بالخواتم  adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: true,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  يسرا  dalam kalimat : إن مع العسر يسرا adalah fathah, posisinya sebagai apa...?",
        answer: [
          {
            option: "Mubtada",
            correct: false,
          },
          {
            option: "Khobar", correct: false
          },
          { option: "Isim Inna", correct: true },
          { option: "Khobar Inna", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  يوم  dalam kalimat : ذهب محمد إلى المدينة يوم الجمعة adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Sukun", correct: false },
          { option: "Kasroh", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata هذه السنة  dalam kalimat : سافرت إلى مكة هذه السنة adalah fathah, posisinya sebagai apa...?",
        answer: [
          {
            option: "Maf'ul Bih",
            correct: false,
          },
          {
            option: "Maf'ul Fiih", correct: true
          },
          { option: "Mustatsna", correct: false },
          { option: "Munada", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الله  dalam kalimat : لا معبود بحق سوى الله adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  غير  dalam kalimat : صلى المسلمون في المسجد غير سعيد adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  حامد  dalam kalimat : ما قام التاجرون إلا حامد adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: true,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  المدرس  dalam kalimat : ما قرآ إلا المدرس adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: true,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الخير  dalam kalimat : ما عملنا إلا الخير adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Berikut ini adalah teman-teman كان, kecuali",
        answer: [
          {
            option: "ليس",
            correct: false,
          },
          {
            option: "حسن", correct: true
          },
          { option: "صار", correct: false },
          { option: "لا يزال", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الله  dalam kalimat : وكان الله غفورا رحيما adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: true,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  نشيطا  dalam kalimat : ليس زيد نشيطا adalah fathah, posisinya sebagai apa...?",
        answer: [
          {
            option: "Mubtada dari ليس",
            correct: false,
          },
          {
            option: "Khobar dari ليس", correct: true
          },
          { option: "Isim dari ليس", correct: false },
          { option: "Maf'ul dari ليس", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  حميد  dalam kalimat : ما زال حميد عالما adalah dhommah... Posisinya sebagai apa?",
        answer: [
          {
            option: "Mubtada dari مازال",
            correct: false,
          },
          {
            option: "Khobar dari مازال", correct: false
          },
          { option: "Isim dari مازال", correct: true },
          { option: "Maf'ul dari مازال", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  جميلا  dalam kalimat : رأيت مسجدا جميلا adalah fathah... Posisinya sebagai apa?",
        answer: [
          {
            option: "Maf'ul Bih",
            correct: false,
          },
          {
            option: "Mudhof Ilaih", correct: false
          },
          { option: "Mudhof", correct: false },
          { option: "Na'at", correct: true }
        ]
      },
      {
        question: "Harokat akhir kata  الأحمر  dalam kalimat : كتبت بالقلم الأحمر adalah ... dan sebagai apa?",
        answer: [
          {
            option: "Dhommah karena khobar",
            correct: false,
          },
          {
            option: "Fathah karena Maf'ul bih", correct: false
          },
          { option: "Kasroh karena Na'at", correct: true },
          { option: "Kasroh karena Mudhof ilaih", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  كبيرة  dalam kalimat : القاهرة مدينة كبيرة adalah ... dan sebagai apa?",
        answer: [
          {
            option: "Dhommah sebagai khobar",
            correct: false,
          },
          {
            option: "Dhommah sebagai Mubtada", correct: false
          },
          { option: "Dhommah sebagai Na'at", correct: true },
          { option: "Kasroh sebagai mudhof ilaih", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الجميلة  dalam kalimat : تلك سيارتي الجميلة adalah ... dan sebagai apa?",
        answer: [
          {
            option: "Dhommah sebagai mubtada'",
            correct: false,
          },
          {
            option: "Fathah sebagai Maf'ul", correct: false
          },
          { option: "Dhommah sebagai Na'at", correct: true },
          { option: "Fathah sebagai Munada", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  المكتبة  dalam kalimat : رجع حسن من السوق والمكتبة adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  المدير  dalam kalimat : ذهب المدرس والمدير إلى المدينة  adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: true,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  جميع dalam kalimat : رأينا المسلمين جميعهم adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  كل  dalam kalimat : جاء المدرسون كلهم adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: true,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  كل  dalam kalimat : ركبوا سيارة المدرسة مع الضيوف كلهم adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  بلال  dalam kalimat : درست في مجلس الشيخ بلال adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  نصف  dalam kalimat : قرأت الكتاب الجديد نصفه adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  نصف  dalam kalimat : قرأت الكتاب الجديد نصفه adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  كتاب  dalam kalimat : نفعني محمد كتابه adalah...",
        answer: [
          {
            option: "Dhommah karena khobar",
            correct: false,
          },
          {
            option: "Dhommah karena Badal", correct: true
          },
          { option: "Fathah Karena Maf'ul bih", correct: false },
          { option: "Fathah karena Badal", correct: false }
        ]
      },
      {
        question: "Mashdar dari جلس adalah....",
        answer: [
          {
            option: "جالس",
            correct: false,
          },
          {
            option: "مجلوس", correct: false
          },
          { option: "جلوس", correct: true },
          { option: "أجلس", correct: false }
        ]
      },
      {
        question: "Mashdar dari قرأ adalah...",
        answer: [
          {
            option: "يقرأ",
            correct: false,
          },
          {
            option: "مقروء", correct: false
          },
          { option: "اقرأ", correct: false },
          { option: "قراءة", correct: true }
        ]
      },
      {
        question: "Mashdar dari جاهد adalah....",
        answer: [
          {
            option: "جاهد",
            correct: false,
          },
          {
            option: "مجهود", correct: false
          },
          { option: "جهاد", correct: true },
          { option: "مجاهدة", correct: false }
        ]
      },
      {
        question: "Mashdar dari علم (allama) adalah....",
        answer: [
          {
            option: "تعليم",
            correct: true,
          },
          {
            option: "تعلم", correct: false
          },
          { option: "معلوم", correct: false },
          { option: "اعلم", correct: false }
        ]
      },
      {
        question: "Kata شوقا dalam kalimat : رجعت إلى البيت شوقا للأسرة berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: true
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: false }
        ]
      },
      {
        question: "Kata راكبا dalam kalimat : أذهب إلى السوق راكبا berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: true,
          },
          {
            option: "Maf'ul Li Ajlih", correct: false
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: false }
        ]
      },
      {
        question: "Kata تأديبا dalam kalimat : ضربت الولد تأديبا له berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: true
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: false }
        ]
      },
      {
        question: "Kata القمر (dibaca fathah) dalam kalimat : سرت والقمر berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: false
          },
          { option: "Maf'ul Ma'ah", correct: true },
          { option: "Maf'ul Muthlaq", correct: false }
        ]
      },
      {
        question: "Kata أكلا dalam kalimat : أكلت  الفاكهة أكلا  berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: false
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: true }
        ]
      },
      {
        question: "Kata اجتهادا dalam kalimat : اجتهدت في الدراسة اجتهادا شديدا berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: false
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: true }
        ]
      },
      {
        question: "Kata مرحا dalam ayat : ولا تمش في الأرض مرحا berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: true,
          },
          {
            option: "Maf'ul Li Ajlih", correct: false
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: false }
        ]
      },
      {
        question: "Kata رغبة dalam kalimat : أذهب إلى المدرسة رغبة في العلم berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: true
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: false }
        ]
      },
      {
        question: "Kata ضربة dalam kalimat : ضربت زيدا ضربة واحدة berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: false
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: true }
        ]
      },
      {
        question: "Kata قعودا dalam kalimat : جلست قعودا berposisi sebagai apa?",
        answer: [
          {
            option: "Hal",
            correct: false,
          },
          {
            option: "Maf'ul Li Ajlih", correct: false
          },
          { option: "Maf'ul Ma'ah", correct: false },
          { option: "Maf'ul Muthlaq", correct: true }
        ]
      },
      {
        question: "Kata البيت (dibaca fathah) dalam kalimat : ما أكبر البيت berposisi sebagai apa?",
        answer: [
          {
            option: "Tamyiz",
            correct: false,
          },
          {
            option: "Ta'ajjub", correct: true
          },
          { option: "Tahdzir", correct: false },
          { option: "Ikhtishosh", correct: false }
        ]
      },
      {
        question: "Kata الطالب (dibaca fathah) dalam kalimat : أنا - الطالب- أطلب العلم berposisi sebagai apa?",
        answer: [
          {
            option: "Tamyiz",
            correct: false,
          },
          {
            option: "Ta'ajjub", correct: false
          },
          { option: "Tahdzir", correct: false },
          { option: "Ikhtishosh", correct: true }
        ]
      },
      {
        question: "Kata وجها dalam kalimat : عمر جميل وجها berposisi sebagai apa?",
        answer: [
          {
            option: "Tamyiz",
            correct: true,
          },
          {
            option: "Ta'ajjub", correct: false
          },
          { option: "Tahdzir", correct: false },
          { option: "Ikhtishosh", correct: false }
        ]
      },
      {
        question: "Kata مصباحا dalam kalimat : لي أحد عشر مصباحا berposisi sebagai apa?",
        answer: [
          {
            option: "Tamyiz",
            correct: true,
          },
          {
            option: "Ta'ajjub", correct: false
          },
          { option: "Tahdzir", correct: false },
          { option: "Ikhtishosh", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  أقلام dalam kalimat : في الحقيبة ثلاثة أقلام adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  الخيانة dalam kalimat : إياكم والخيانة adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata  كل dalam kalimat :أحترم الأستاذ كل الاحترام  adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Kata كتابا dalam kalimat : أنت أكثر مني كتابا berposisi sebagai apa?",
        answer: [
          {
            option: "Tamyiz",
            correct: true,
          },
          {
            option: "Ta'ajjub", correct: false
          },
          { option: "Tahdzir", correct: false },
          { option: "Ikhtishosh", correct: false }
        ]
      },
      {
        question: "Berikut ini adalah fi'il mujarrod, kecuali...",
        answer: [
          {
            option: "ركب - يركب",
            correct: true,
          },
          {
            option: "قرأ - يقرأ", correct: false
          },
          { option: "علم - يعلم", correct: false },
          { option: "جاهد - يجاهد", correct: false }
        ]
      },
      {
        question: "Berikut ini adalah fi'il mazid, kecuali...",
        answer: [
          {
            option: "أخرج - يخرج",
            correct: false,
          },
          {
            option: "خرج - يخرج", correct: true
          },
          { option: "استخرج - يستخرج", correct: false },
          { option: "انكسر - ينكسر", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il Madhi kata أخبرتم adalah ...",
        answer: [
          {
            option: "هم",
            correct: false,
          },
          {
            option: "أنتم", correct: true
          },
          { option: "أنا", correct: false },
          { option: "نحن", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il Mudhori kata يضاربون adalah ...",
        answer: [
          {
            option: "هم",
            correct: true,
          },
          {
            option: "أنتم", correct: false
          },
          { option: "أنا", correct: false },
          { option: "نحن", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il  Amr kata تعلمي adalah ...",
        answer: [
          {
            option: "هم",
            correct: false,
          },
          {
            option: "أنتم", correct: false
          },
          { option: "أنت", correct: true },
          { option: "نحن", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il  Madhi kata استمعوا adalah ...",
        answer: [
          {
            option: "أنتم",
            correct: false,
          },
          {
            option: "أنت", correct: false
          },
          { option: "نحن", correct: false },
          { option: "هم", correct: true }
        ]
      },
      {
        question: "Dhomir Fi'il  Mudhori kata نستغفر adalah ...",
        answer: [
          {
            option: "أنتم",
            correct: false,
          },
          {
            option: "أنت", correct: false
          },
          { option: "نحن", correct: true },
          { option: "هم", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il  Amr kata أخرجوا adalah ...",
        answer: [
          {
            option: "أنتم",
            correct: true,
          },
          {
            option: "أنت", correct: false
          },
          { option: "أنتن", correct: false },
          { option: "هم", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il  Madhi kata تعلمتن adalah ...",
        answer: [
          {
            option: "أنتم",
            correct: false,
          },
          {
            option: "أنت", correct: false
          },
          { option: "أنتن", correct: true },
          { option: "هم", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il  Mudhori kata يجتمعان adalah ...",
        answer: [
          {
            option: "هو",
            correct: false,
          },
          {
            option: "هما", correct: true
          },
          { option: "هم", correct: false },
          { option: "هن", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il  Madhi kata قاتلت adalah ...",
        answer: [
          {
            option: "هو",
            correct: false,
          },
          {
            option: "هما", correct: false
          },
          { option: "أنا", correct: true },
          { option: "نحن", correct: false }
        ]
      },
      {
        question: "Dhomir Fi'il  Mudhori kata أتناول adalah ...",
        answer: [
          {
            option: "هو",
            correct: false,
          },
          {
            option: "أنت", correct: false
          },
          { option: "أنا", correct: true },
          { option: "نحن", correct: false }
        ]
      },
      {
        question: "Kata kerja pasif disebut ...",
        answer: [
          {
            option: "Fi'il Ma'lum",
            correct: false,
          },
          {
            option: "Fi'il Majhul", correct: true
          },
          { option: "Fi'il Mujarrod", correct: false },
          { option: "Fi'il Mazid", correct: false }
        ]
      },
      {
        question: "Kata kerja خلق pada kalimat : خلق الإنسان من طين dibawah dibaca...",
        answer: [
          {
            option: "Kholaqo",
            correct: false,
          },
          {
            option: "Kholqun", correct: false
          },
          { option: "Khuliqo", correct: true },
          { option: "Khuluqun", correct: false }
        ]
      },
      {
        question: "Kata kerja يكتب pada kalimat : يكتب الدرس على السبورة dibawah dibaca...",
        answer: [
          {
            option: "Yaktubu",
            correct: false,
          },
          {
            option: "Yuktibu", correct: false
          },
          { option: "Yaktibu", correct: false },
          { option: "Yuktabu", correct: true }
        ]
      },
      {
        question: "Kata kerja كتب pada kalimat : كتب عليكم القصاص في القتلى dibaca...",
        answer: [
          {
            option: "Kataba",
            correct: false,
          },
          {
            option: "Kutiba", correct: true
          },
          { option: "Kutubun", correct: false },
          { option: "Katiba", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata kerja أجلس pada kalimat : أريد أن أجلس هناك  adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata kerja يرجع pada kalimat : لم يرجع المدرس من المدينة adalah...",
        answer: [
          {
            option: "Dhommah",
            correct: false,
          },
          {
            option: "Fathah", correct: false
          },
          { option: "Kasroh", correct: false },
          { option: "Sukun", correct: true }
        ]
      },
      {
        question: "Harokat akhir kata kerja ندرس pada kalimat : أذهب إلى المدرسة لندرس اللغة العربية adalah...",
        answer: [
          {
            option: "Kasroh",
            correct: false,
          },
          {
            option: "Sukun", correct: false
          },
          { option: "Dhommah", correct: false },
          { option: "Fathah", correct: true }
        ]
      },
      {
        question: "Harokat akhir kata kerja تضرب pada kalimat : لا تضرب ولدك بالعصا  adalah...",
        answer: [
          {
            option: "Kasroh",
            correct: false,
          },
          {
            option: "Sukun", correct: true
          },
          { option: "Dhommah", correct: false },
          { option: "Fathah", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata kerja فتنجح pada kalimat : اجتهد فتنجح آخر السنة adalah...",
        answer: [
          {
            option: "Kasroh",
            correct: false,
          },
          {
            option: "Fathah", correct: true
          },
          { option: "Dhommah", correct: false },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Harokat akhir kata kerja نقرأ pada kalimat : لن نقرأ تلك الرسالة  adalah...",
        answer: [
          {
            option: "Kasroh",
            correct: false,
          },
          {
            option: "Dhommah", correct: false
          },
          { option: "Fathah", correct: true },
          { option: "Sukun", correct: false }
        ]
      },
      {
        question: "Kata kerja تنجح pada kalimat : إن تجتهد في الدرس تنجح في الامتحان dibaca",
        answer: [
          {
            option: "tanjahu",
            correct: false,
          },
          {
            option: "tanjaha", correct: false
          },
          { option: "tanjah", correct: true },
          { option: "tanjahi", correct: false }
        ]
      },
      {
        question: "Kata kerja استجب pada kalimat : وقال ربكم ادعوني أستجب لكم dibaca sukun (astajib) karena sebagai...",
        answer: [
          {
            option: "jawab syarat",
            correct: false,
          },
          {
            option: "mubtada", correct: false
          },
          { option: "khobar", correct: false },
          { option: "jawab fiil tholab", correct: true }
        ]
      },
      {
        question: "Harokat akhir kata kerja رحمة pada kalimat : لو لا رحمة الله لهلك الناس adalah...",
        answer: [
          {
            option: "kasroh",
            correct: false,
          },
          {
            option: "dhommah", correct: false
          },
          { option: "fathah", correct: false },
          { option: "sukun", correct: true }
        ]
      },
      {
        question: "Kata kerja يحاسب pada kalimat : مهما تعملوا يحاسبكم الله dibaca ...",
        answer: [
          {
            option: "yuhaasibu",
            correct: false,
          },
          {
            option: "yuhaasiba", correct: false
          },
          { option: "yuhaasibi", correct: false },
          { option: "yuhaasib", correct: true }
        ]
      },
      {
        question: "Kata kerja تدرس pada kalimat : أين تدرس اللغة العربية يا عبد الله؟ dibaca ...",
        answer: [
          {
            option: "tadrusu",
            correct: true,
          },
          {
            option: "tadrusa", correct: false
          },
          { option: "tadrusi", correct: false },
          { option: "tadrus", correct: false }
        ]
      },
      {
        question: "Kata kerja تفهم pada kalimat : اقرأه مرة أخرى تفهمه dibaca ...",
        answer: [
          {
            option: "tafhamu",
            correct: false,
          },
          {
            option: "tafhama", correct: false
          },
          { option: "tafhami", correct: false },
          { option: "tafham", correct: true }
        ]
      },
      {
        question: "Kata kerja تقرأ pada kalimat : أي كتاب تقرأ في المكتبة ؟ dibaca ...",
        answer: [
          {
            option: "taqro'u",
            correct: true,
          },
          {
            option: "taqro'a", correct: false
          },
          { option: "taqro'i", correct: false },
          { option: "taqro'", correct: false }
        ]
      },
      {
        question: "Berikut ini adalah bentuk isim fa'il, kecuali ",
        answer: [
          {
            option: "كاتب - كافر",
            correct: false,
          },
          {
            option: "مسلم - منافق", correct: false
          },
          { option: "راع - داع", correct: false },
          { option: "سجود - حضور", correct: true }
        ]
      },
      {
        question: "Isim Fa'il dari kata علّم (allama) adalah...",
        answer: [
          {
            option: "عالم",
            correct: false,
          },
          {
            option: "معلم", correct: true
          },
          { option: "معلوم", correct: false },
          { option: "اعلم", correct: false }
        ]
      },
      {
        question: "Isim Manqhus adalah berbentuk isim fa'il, contohnya..",
        answer: [
          {
            option: "حامد - راجع",
            correct: false,
          },
          {
            option: "قاض - داع", correct: true
          },
          { option: "مقيم - منير", correct: false },
          { option: "تعليم - تحسين", correct: false }
        ]
      },
      {
        question: "Berikut ini adalah bentuk isim Maf'ul, kecuali",
        answer: [
          {
            option: "مكتوب - ممدود",
            correct: false,
          },
          {
            option: "مدعوّ - ممنوع", correct: false
          },
          { option: "كفور - شكور", correct: true },
          { option: "مقول - مبيع", correct: false }
        ]
      },
      {
        question: "Isim Maf'ul adalah bentuk kata yang memilik imbuhan terjemah ..",
        answer: [
          {
            option: "Yang di ..... (yang ditulis)",
            correct: false,
          },
          {
            option: "Ter.... (tertulis)", correct: false
          },
          { option: "ter... kan (tertuliskan)", correct: false },
          { option: "Semua jawaban benar", correct: true }
        ]
      },
      {
        question: "Isim Maf'ul dari kata قرأ adalah... ",
        answer: [
          {
            option: "قارئ",
            correct: false,
          },
          {
            option: "مقروء", correct: true
          },
          { option: "مقرء", correct: false },
          { option: "قراءة", correct: false }
        ]
      },
      {
        question: "Isim Maf'ul dari kata تاب  (bertaubat) adalah...",
        answer: [
          {
            option: "توبة",
            correct: false,
          },
          {
            option: "يتوب", correct: false
          },
          { option: "متاب", correct: false },
          { option: "متوب", correct: true }
        ]
      },
      {
        question: "Isim Maf'ul dari kata تلى (Membaca)  adalah...",
        answer: [
          {
            option: "تال",
            correct: false,
          },
          {
            option: "متلى", correct: false
          },
          { option: "متلوّ", correct: true },
          { option: "أتوب", correct: false }
        ]
      },
      {
        question: "Isim Maf'ul dari kata كال (menimbang)  adalah... ",
        answer: [
          {
            option: "يكيل",
            correct: false,
          },
          {
            option: "مكيل", correct: true
          },
          { option: "مكال", correct: false },
          { option: "مكول", correct: false }
        ]
      },
      {
        question: "Fi'il Mudhori dari kata  وزن (menimbang)  adalah... ",
        answer: [
          {
            option: "يزون yazuunu",
            correct: false,
          },
          {
            option: "يزان yuzaanu", correct: false
          },
          { option: "يزين yaziinu", correct: false },
          { option: "يزن yazinu", correct: true }
        ]
      },
      {
        question: "Fi'il Mudhori dari kata  عاد (kembali)  adalah... ",
        answer: [
          {
            option: "يعد",
            correct: false,
          },
          {
            option: "يعود", correct: true
          },
          { option: "يعيد", correct: false },
          { option: "يعاد", correct: false }
        ]
      },
      {
        question: "Fi'il Mudhori dari kata  نام (tidur)  adalah... ",
        answer: [
          {
            option: "ينام",
            correct: true,
          },
          {
            option: "ينوم", correct: false
          },
          { option: "ينيم", correct: false },
          { option: "ينم", correct: false }
        ]
      },
      {
        question: "Fi'il Amr dari kata  صام (puasa)  adalah... ",
        answer: [
          {
            option: "صم (shum)",
            correct: true,
          },
          {
            option: "صم (shom)", correct: false
          },
          { option: "صم (shim)", correct: false },
          { option: "صوم", correct: false }
        ]
      },
      

      
      

      

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
  getNahwus() {
    return this.nahwus;
  }
}
