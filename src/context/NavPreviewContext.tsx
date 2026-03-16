"use client"

import { createContext, useContext, useState } from "react"

type PreviewContextType = {
    previewImage: string | null
    setPreviewImage: (img: string | null) => void
}

const PreviewContext = createContext<PreviewContextType | null>(null)

export function NavPreviewProvider({ children }: { children: React.ReactNode }) {
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    return (
        <PreviewContext.Provider value={{ previewImage, setPreviewImage }}>
            {children}
        </PreviewContext.Provider>
    )
}

export function useNavPreview() {
    const context = useContext(PreviewContext)

    if (!context) {
        throw new Error("useNavPreview must be used inside NavPreviewProvider")
    }

    return context
}