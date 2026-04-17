// components/ChatInput.tsx
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    input: string;
    setInput: (value: string) => void;
    onSend: () => void;
    loading: boolean;
}

export const ChatInput = ({ input, setInput, onSend, loading }: Props) => {
    return (
        <Box
            sx={{
                p: 2,
                display: 'flex',
                gap: 1,
                background: '#fff',
                borderTop: '1px solid #ddd'
            }}
        >
            <TextField
                fullWidth
                placeholder="Send a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSend()}
                sx={{
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: 3
                }}
            />

            <IconButton color="primary" onClick={onSend} disabled={loading}>
                <SendIcon />
            </IconButton>
        </Box>
    );
};