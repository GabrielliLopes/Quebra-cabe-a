import React, { useState } from 'react';
import {
  ContactSection,
  Container,
  SectionHeader,
  ContactContent,
  ContactInfo,
  ContactItem,
  ContactIcon,
  ContactDetails,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton
} from './Contact.styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação: pelo menos email ou telefone deve estar preenchido
    if (!formData.email && !formData.phone) {
      alert('Por favor, preencha pelo menos o Email ou o Telefone para contato.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('enviando');

    const form = e.target;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xldqlnnr', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('sucesso');
        alert(
          `Obrigado, ${formData.name}! Recebemos sua mensagem e entraremos em contato em breve.`
        );
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus('erro');
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      setSubmitStatus('erro');
      alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('');
      }, 2000);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <h2>Entre em Contato</h2>
          <p>Vamos montar juntos a solução perfeita para o seu negócio</p>
        </SectionHeader>
        <ContactContent>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-envelope"></i>
              </ContactIcon>
              <ContactDetails>
                <h3>E-mail</h3>
                <p>qccomunica@gmail.com</p>
              </ContactDetails>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <i className="fab fa-whatsapp"></i>
              </ContactIcon>
              <ContactDetails>
                <h3>Telefone</h3>
                <p>(16) 99641-5690</p>
              </ContactDetails>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-clock"></i>
              </ContactIcon>
              <ContactDetails>
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 8h30 às 18h</p>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nova mensagem do site Quebra-Cabeça" />
            <FormGroup>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              status={submitStatus}
              disabled={isSubmitting}
            >
              {submitStatus === 'enviando'
                ? 'Enviando...'
                : submitStatus === 'sucesso'
                ? 'Mensagem Enviada!'
                : 'Enviar Mensagem'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
