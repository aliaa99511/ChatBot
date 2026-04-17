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
      {isEmpty ? (
        <EmptyState />
      ) : (
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






// thats work
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Box,
//   TextField,
//   IconButton,
//   Typography,
//   Paper,
//   CircularProgress
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import { askQuestion, type AppDispatch, type RootState } from './store';

// export default function App() {
//   const [input, setInput] = useState('');
//   const dispatch = useDispatch<AppDispatch>();
//   const { messages, loading } = useSelector((state: RootState) => state.chat);

//   const handleSend = () => {
//     if (!input.trim()) return;
//     dispatch(askQuestion(input));
//     setInput('');
//   };

//   const copyText = (text: string) => {
//     navigator.clipboard.writeText(text);
//   };

//   const isEmpty = messages.length === 0;

//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         backgroundImage: `url('/background.svg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Empty State */}
//       {isEmpty && (
//         <Box
//           sx={{
//             flex: 1,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column',
//             color: '#fff',
//             textAlign: 'center'
//           }}
//         >
//           <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
//             Where should we begin?
//           </Typography>

//           <Typography variant="body1" sx={{ opacity: 0.8, mt: 1 }}>
//             Ask anything, generate code, or explore ideas
//           </Typography>
//         </Box>
//       )}

//       {/* Messages */}
//       {!isEmpty && (
//         <Box
//           sx={{
//             flex: 1,
//             overflowY: 'auto',
//             p: 3
//           }}
//         >
//           {messages.map((msg, index) => (
//             <Box key={index} sx={{ mb: 3 }}>

//               {/* User */}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     maxWidth: '70%',
//                     bgcolor: 'primary.main',
//                     color: '#fff',
//                     borderRadius: 3
//                   }}
//                 >
//                   <Typography>{msg.question}</Typography>
//                 </Paper>
//               </Box>

//               {/* AI */}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     maxWidth: '75%',
//                     borderRadius: 3,
//                     position: 'relative'
//                   }}
//                 >
//                   <Typography>{msg.answer}</Typography>

//                   <IconButton
//                     size="small"
//                     onClick={() => copyText(msg.answer)}
//                     sx={{ position: 'absolute', top: 5, right: 5 }}
//                   >
//                     <ContentCopyIcon fontSize="small" />
//                   </IconButton>
//                 </Paper>
//               </Box>
//             </Box>
//           ))}

//           {loading && (
//             <Box sx={{ textAlign: 'center', mt: 2 }}>
//               <CircularProgress size={24} />
//             </Box>
//           )}
//         </Box>
//       )}

//       {/* Input */}
//       <Box
//         sx={{
//           p: 2,
//           display: 'flex',
//           gap: 1,
//           background: '#fff',
//           borderTop: '1px solid #ddd'
//         }}
//       >
//         <TextField
//           fullWidth
//           placeholder="Send a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           sx={{
//             background: 'rgba(255,255,255,0.9)',
//             borderRadius: 3
//           }}
//         />

//         <IconButton
//           color="primary"
//           onClick={handleSend}
//           disabled={loading}
//         >
//           <SendIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }