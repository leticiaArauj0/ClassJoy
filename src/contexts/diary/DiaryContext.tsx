import { ReactNode, createContext, useState } from "react"
import { api } from "../../lib/axios"

interface Diary {
    id: number;

    date: Date;
    entryTime: string;
    departureTime: string;
  
    feeding: string;
    ateAlone: string;
    obsFeeding?: string;
  
    sleep: string;
    startSleep?: string;
    endSleep?: string;
    obsSleep?: string;
  
    bathroom: string;
    bathroomAmount: number;
    obsBathroom?: string;
  
    reminder?: string;
    notice?: string;
  
    studentId: number;
}

interface CreateDiaryInput {
    date: Date;
    entryTime: string;
    departureTime: string;
  
    feeding: string;
    ateAlone: string;
    obsFeeding?: string;
  
    sleep: string;
    startSleep?: string;
    endSleep?: string;
    obsSleep?: string;
  
    bathroom: string;
    bathroomAmount: number;
    obsBathroom?: string;
  
    reminder?: string;
    notice?: string;
  
    studentId: number;
}

interface DiaryContextType {
    diaries: Diary[],
    createDiary: (data: CreateDiaryInput) => Promise<void>
    showDiaryToday: (id: number, date: string) => Promise<void>
    selectedDiary: Diary | null | undefined
    setSelectedDiary: React.Dispatch<React.SetStateAction<Diary | null | undefined>> 
}

interface DiaryProviderProps {
    children: ReactNode
}

export const DiaryContext = createContext({} as DiaryContextType)

export function DiaryProvider({ children }: DiaryProviderProps) {
    const [diaries, setDiaries] = useState<Diary[]>([])
    const [selectedDiary, setSelectedDiary] = useState<Diary | null>()

    async function createDiary(data: CreateDiaryInput) {
        const response = await api.post(`/diary`, data)

        setDiaries(state => [response.data, ...state])
    }

    async function showDiaryToday(id: number, date: string) {
        try {
            const response = await api.get(`/diary/today/${id}?date=${date}`)
            const diary = response.data
            setSelectedDiary(diary)
        } catch(error) {
            console.error('Agenda não encontrada:', error);
            setSelectedDiary(null)
        }
    }

    return (
        <DiaryContext.Provider value={{ diaries, createDiary, showDiaryToday, selectedDiary, setSelectedDiary }}>
            {children}
        </DiaryContext.Provider>
    )
}
