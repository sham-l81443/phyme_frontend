import { create } from "zustand"
import { persist, createJSONStorage, PersistOptions, devtools } from "zustand/middleware"
import { initialPersistState } from "./initialPersistState"

interface IStudentStoreState {
    studentStore: {
        persist: Record<string, any>,
        nonPersist: Record<string, any>,
    },
    setStudentDataById: (id: string, data: any, storeType: "persist" | "nonPersist") => void
}

// Define the persist configuration type - only include what we want to persist
type IStudentStorePersist = {
    studentStore: {
        persist: Record<string, any>
    }
}

const persistConfig: PersistOptions<IStudentStoreState, IStudentStorePersist> = {
    name: "admin-store",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
        studentStore: {
            persist: state.studentStore.persist,
        },
    }),
}

// Create the store with proper typing for the middleware
const useStudentStore = create<IStudentStoreState>()(
    devtools(
        persist(
            (set) => ({
                studentStore: {
                    persist: {
                        ...initialPersistState
                    },
                    nonPersist: {},
                },
                setStudentDataById: (id: string, data: any, storeType: "persist" | "nonPersist") =>
                    set((state: IStudentStoreState) => ({
                        studentStore: {
                            ...state.studentStore,
                            [storeType]: {
                                ...state.studentStore[storeType],
                                [id]: data,
                            },
                        },
                    })),
            }),
            persistConfig,
        ),
    ),
)

export default useStudentStore
export const {
    setStudentDataById
} = useStudentStore.getState()