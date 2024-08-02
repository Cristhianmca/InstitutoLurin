import React, { useState, useEffect, useRef } from 'react';
import './chatbox.css';  // Importa el archivo CSS

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const botResponses = {
    initial: "¡Hola! Soy el asistente virtual del Instituto Lurin. ¿En qué puedo ayudarte hoy?",
    options: "Puedo ayudarte con: 1) Información sobre carreras, 2) Proceso de inscripción, 3) Costos y becas, 4) Hablar con un asesor. Por favor, escribe el número de tu opción.",
    careers: "Ofrecemos carreras en Computación, Contabilidad y Prótesis. ¿Sobre cuál te gustaría saber más?",
    enrollment: "El proceso de inscripción consta de 3 pasos: 1) Llenar el formulario en línea, 2) Pagar la matrícula, 3) Asistir a la orientación. ¿Necesitas más detalles sobre algún paso?",
    costs: "Los costos varían según la carrera. Contamos con opciones de becas y financiamiento. ¿Te gustaría que un asesor te brinde información más detallada?",
    advisor: "Entiendo que quieres hablar con un asesor. Te conectaré con uno en breve. Por favor, espera un momento.",
    default: "No estoy seguro de cómo responder a eso. ¿Quieres que te conecte con un asesor para obtener más ayuda?",
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      let botReply;
      const userMessage = messages[messages.length - 1].text.toLowerCase();

      if (userMessage.includes('1') || userMessage.includes('carrera')) {
        botReply = botResponses.careers;
      } else if (userMessage.includes('2') || userMessage.includes('inscripción')) {
        botReply = botResponses.enrollment;
      } else if (userMessage.includes('3') || userMessage.includes('costo') || userMessage.includes('beca')) {
        botReply = botResponses.costs;
      } else if (userMessage.includes('4') || userMessage.includes('asesor')) {
        botReply = botResponses.advisor;
      } else {
        botReply = botResponses.default;
      }

      setTimeout(() => {
        setMessages([...messages, { text: botReply, sender: 'bot' }]);
      }, 1000);
    }
  }, [messages]);

  useEffect(() => {
    setMessages([{ text: botResponses.initial, sender: 'bot' }, { text: botResponses.options, sender: 'bot' }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="robot-icon">
          🤖
        </button>
      )}
      {isOpen && (
        <div className="chat-window">
          <div className="header">
            <span>Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="close-button">X</button>
          </div>
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="input"
              placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSend} className="button">Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
