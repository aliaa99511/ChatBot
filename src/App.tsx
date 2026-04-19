import { Box, CircularProgress } from '@mui/material';
import { useChat } from './hooks/useChat';
import { MessageBubble } from './components/MessageBubble';
import { EmptyState } from './components/EmptyState';
import { ChatInput } from './components/ChatInput';

export default function App() {
  const {
    input,
    setInput,
    messages,
    loading,
    sendMessage,
    copyText,
    isEmpty
  } = useChat();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url('/background.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {isEmpty && !loading ? (
        <EmptyState />
      ) : loading && messages.length === 0 ? (
        // loading first time(center page)
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size={30} />
        </Box>
      ) : (
        // messages
        <Box sx={{ flex: 1, overflowY: 'auto', p: 3 }}>
          {messages.map((msg, index) => (
            <MessageBubble
              key={index}
              question={msg.question}
              answer={msg.answer}
              onCopy={copyText}
            />
          ))}

          {loading && (
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <CircularProgress size={24} />
            </Box>
          )}
        </Box>
      )}

      <ChatInput
        input={input}
        setInput={setInput}
        onSend={sendMessage}
        loading={loading}
      />
    </Box>
  );
}



