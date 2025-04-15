import { create } from "zustand"
import { persist, createJSONStorage, PersistOptions,devtools } from "zustand/middleware"

interface IAdminStoreState {
    adminStore: {
        persist: Record<string, any>,
        nonPersist: Record<string, any>,
    },
    setAdminDataById: (id: string, data: any, storeType: "persist" | "nonPersist") => void
}

// Define the persist configuration type - only include what we want to persist
type AdminStorePersist = {
    adminStore: {
        persist: Record<string, any>
    }
}

const persistConfig: PersistOptions<IAdminStoreState, AdminStorePersist> = {
    name: "admin-store",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
        adminStore: {
            persist: state.adminStore.persist,
        },
    }),
}

// Create the store with proper typing for the middleware
const useAdminStore = create<IAdminStoreState>()(
    devtools(
        persist(
            (set) => ({
                adminStore: {
                    persist: {
                        name: "test",
                    },
                    nonPersist: {},
                },
                setAdminDataById: (id: string, data: any, storeType: "persist" | "nonPersist") =>
                    set((state: IAdminStoreState) => ({
                        adminStore: {
                            ...state.adminStore,
                            [storeType]: {
                                ...state.adminStore[storeType],
                                [id]: data,
                            },
                        },
                    })),
            }),
            persistConfig,
        ),
    ),
)

export default useAdminStore