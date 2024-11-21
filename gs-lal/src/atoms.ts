import { atom } from 'jotai'
import { Condominio } from '@/types'

export const userAtom = atom<Condominio | null>(null)
