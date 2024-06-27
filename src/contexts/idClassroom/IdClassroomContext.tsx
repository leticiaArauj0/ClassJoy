import { createContext, useState, useContext, ReactNode } from 'react';

interface IdClassroomContextProps {
    classroomId: number | null,
    setClassroomId: any
}

interface IdClassroomsProviderProps {
    children: ReactNode
}

export const IdClassroomContext = createContext({} as IdClassroomContextProps)

export const IdClassroomProvider = ({ children }: IdClassroomsProviderProps) => {
  const [classroomId, setClassroomId] = useState(null);

  return (
    <IdClassroomContext.Provider value={{ classroomId, setClassroomId }}>
      {children}
    </IdClassroomContext.Provider>
  )
}

export const useIdClassroom = () => useContext(IdClassroomContext)
