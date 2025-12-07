import styled from 'styled-components';

export const ContactSection = styled.section`
  background: #ffffff;
  color: #000000;
  padding: 6rem 2rem;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    color: #000000;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(222, 200, 165, 0.2);
  border: 1px solid rgba(222, 200, 165, 0.5);
  border-radius: 1.5rem;
  transition: 0.3s ease;

  &:hover {
    border-color: #ff7200;
    transform: translateX(10px);
    background: rgba(222, 200, 165, 0.4);
  }
`;

export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  color: white;
`;

export const ContactDetails = styled.div`
  h3 {
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
    color: #000000;
  }

  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const ContactForm = styled.form`
  background: rgba(222, 200, 165, 0.2);
  border: 1px solid rgba(222, 200, 165, 0.5);
  border-radius: 1.5rem;
  padding: 2rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #000000;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  color: #000000;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1rem;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff7200;
    box-shadow: 0 0 0 3px rgba(255, 114, 0, 0.2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  color: #000000;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1rem;
  transition: 0.3s ease;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #ff7200;
    box-shadow: 0 0 0 3px rgba(255, 114, 0, 0.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: ${props => props.status === 'sucesso' ? '#4caf50' : 'linear-gradient(135deg, #ff7200 0%, #ff8c33 100%)'};
  border: none;
  border-radius: 2rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: 0.3s ease;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 114, 0, 0.5);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
