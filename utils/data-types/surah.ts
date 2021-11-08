interface ISurahName {
  long: string;
  short: string;
  translation: {
    en: string;
    id: string;
  };
  transliteration: {
    en: string;
    id: string;
  }
};

interface IRelevation {
  arab: string;
  en: string;
  id: string;
};

export interface IListSurah {
  name: ISurahName;
  number: number;
  numberOfVerses: number;
  revelation: IRelevation;
  sequence: number;
  tafsir: {
    id: string;
  }
}

export interface IVerses {
  audio: {
    primary: string;
    secondary: string[];
  };
  meta: {
    hizbQuarter: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    sajda: {
      obligatory: boolean;
      recomended: boolean;
    }
  };
  number: {
    inQuran: number;
    inSurah: number;
  };
  tafsir: {
    id: {
      long: string;
      short: string;
    }
  };
  text: {
    arab: string;
    transliteration: {
      en: string;
    }
  };
  translation: {
    en: string;
    id: string;
  }
}

export interface IDetailSurah {
  name: ISurahName;
  number: number;
  numberOfVerses: number;
  preBismillah: string | null;
  revelation: IRelevation;
  sequence: number;
  tafsir: {
    id: string;
  };
  verses: IVerses[]
}