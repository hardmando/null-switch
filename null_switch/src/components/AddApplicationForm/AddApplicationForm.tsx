import SubmitButton from '../elements/SubmitButton/SubmitButton';
import { CreateApplication } from '../../lib/firestore';
import { StyledAddApplicationForm } from './StyledAddApplicationForm';
import InputBox from '../../components/elements/InputBox/InputBox';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { type ApplicationStatus } from '../../lib/firestore';

const AddApplicationForm = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState<ApplicationStatus>('applied');
  const [notes, setNotes] = useState('');

  const { user } = useAuth();
  if (!user) return null;



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log({
      position,
      company,
      date: new Date(),
      status,
      notes,
      userId: user.uid,
    });
    e.preventDefault();
    try {
      await CreateApplication({
        position: position,
        company: company,
        date: new Date(),
        status: status,
        notes: notes,
        userId: user.uid,
      })
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  }

  return (
    <StyledAddApplicationForm>
      <form onSubmit={handleSubmit}>
        <InputBox
          label='company'
          placeholder='company name'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <InputBox
          label='position'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder='position'
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
        >
          <option value='applied'>applied</option>
          <option value='interview'>interview</option>
          <option value='offer'>offer</option>
          <option value='rejected'>rejected</option>
        </select>
        <textarea
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
        <SubmitButton type='submit' content='Add' />
      </form>
    </StyledAddApplicationForm>
  );
};

export default AddApplicationForm;
