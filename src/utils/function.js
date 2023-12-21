export function generateRandomNumber() {
  // Menghasilkan angka acak antara 0 dan 999999 (maksimal 8 digit)
  const randomNumber = Math.floor(Math.random() * 100000000);

  return randomNumber;
}

export function formatNumberWithCommas(number) {
  // Konversi angka menjadi string
  const numberString = number.toString();

  // Pisahkan bagian desimal jika ada
  const parts = numberString.split('.');
  const integerPart = parts[0];
  const decimalPart = parts.length > 1 ? `.${parts[1]}` : '';

  // Tambahkan koma setiap tiga digit dari belakang
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );

  // Gabungkan kembali bagian integer dan desimal
  const formattedNumber = formattedIntegerPart + decimalPart;

  return formattedNumber;
}

export function getFirstWord(sentence) {
  // Membagi kalimat menjadi array kata-kata
  const words = sentence.split(' ');

  // Mengambil kata pertama
  const firstWord = words[0];

  return firstWord;
}
