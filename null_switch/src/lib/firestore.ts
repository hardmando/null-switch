import { firestore } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export type ApplicationStatus = 'applied' | 'interview' | 'offer' | 'rejected';

interface Application {
  position: string;
  company: string;
  date: Date;
  status: ApplicationStatus;
  notes?: string;
  userId: string;
}

export const CreateApplication = async (data: Application) => {
  try {
    const docRef = await addDoc(collection(firestore, 'applications'), data);
    return docRef;
  } catch (error) {
    console.error('Error adding application: ', error);
    throw error;
  }
};


