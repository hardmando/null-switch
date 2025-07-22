import { firestore } from './firebase';
import { collection, addDoc, serverTimestamp, onSnapshot, where, query } from 'firebase/firestore';

export type ApplicationStatus = 'applied' | 'interview' | 'offer' | 'rejected';

export interface Application {
  id: string;
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
export const SubscribeToApplications = (
  userId: string,
  onUpdate: (apps: Application[]) => void
): (() => void) => {
  const q = query(
    collection(firestore, 'applications'),
    where('userId', '==', userId)
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const apps: Application[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Application, 'id'>),
    }));
    onUpdate(apps);
  });
  return unsubscribe;
};


