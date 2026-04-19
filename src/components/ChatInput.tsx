import { Box, TextField, IconButton, Chip } from '@mui/material';
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
                background: 'transparent',
            }}
        >
            {/* Outer Gradient Border */}
            <Box
                sx={{
                    borderRadius: 1,
                    padding: '2px',
                    background:
                        'linear-gradient(90deg, #ff7a18, #32d2aa, #6a5cff, #ff7a18)',
                }}
            >
                {/* Inner Container */}
                <Box
                    sx={{
                        borderRadius: 1,
                        background: '#f5f5f7',
                        p: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    {/* Input Row */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TextField
                            fullWidth
                            placeholder="Send a message here..."
                            variant="standard"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && onSend()}
                            slotProps={{
                                input: {
                                    disableUnderline: true,
                                    sx: {
                                        height: 70,
                                        display: 'flex',
                                        alignItems: 'center',
                                    },
                                },
                            }}
                        />

                        <IconButton
                            onClick={onSend}
                            disabled={loading}
                            sx={{
                                background: '#4f7cff',
                                color: '#fff',
                                '&:hover': {
                                    background: '#3b6df0',
                                },
                                borderRadius: 2,
                                width: 40,
                                height: 40,
                            }}
                        >
                            <SendIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Chip label="Fix Bug" size="small" />
                        <Chip label="Reasoning" size="small" />
                        <Chip label="Deep Research" size="small" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};