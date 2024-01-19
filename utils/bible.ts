import kja from '@/assets/bibles/kja.json'
import aa from '@/assets/bibles/aa.json'
import acf from '@/assets/bibles/acf.json'
import arc from '@/assets/bibles/arc.json'
import nvi from '@/assets/bibles/nvi.json'

export type ChapterType = string[]

export type BookType = {
  abbrev: string
  name: string
  chapters: ChapterType[]
}

export type BibleType = BookType[]

export type VersionsType = 'kja' | 'aa' | 'acf' | 'arc' | 'nvi'

const getBibleByVersion = (version: VersionsType = 'nvi' ): BibleType => {
  switch (version) {
    case 'aa':
      return aa as BibleType
    case 'acf':
      return acf as BibleType
    case 'arc':
      return arc as BibleType
    case 'nvi':
      return nvi as BibleType
    case 'kja':
    default:
      return kja as BibleType
  }
}

const getChapter = (bookAbbreviation: string, chapter: number, version: VersionsType = 'nvi'): string[] => {
  const bible: BibleType = getBibleByVersion(version)
  return bible.find(book => book.abbrev === bookAbbreviation)?.chapters[chapter - 1] || []
}

const BibleUtils = {
  getChapter
}

export default BibleUtils
