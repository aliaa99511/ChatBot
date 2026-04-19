import { Box, Paper, Typography, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
    question: string;
    answer: string;
    onCopy: (text: string) => void;
}

export const MessageBubble = ({ question, answer, onCopy }: Props) => {
    return (
        <Box sx={{ mb: 3 }}>

            {/* User */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Paper
                    sx={{
                        p: 1.8,
                        maxWidth: '70%',
                        bgcolor: 'primary.main',
                        color: '#fff',
                        borderRadius: 1
                    }}
                >
                    <Typography>{question}</Typography>
                </Paper>
            </Box>

            {/* AI */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Paper
                    sx={{
                        p: 2.5,
                        maxWidth: '75%',
                        borderRadius: 1,
                        position: 'relative',
                        // backgroundColor: '#f9f9f9',
                        boxShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}
                >
                    <Typography sx={{ pr: 1.8 }}>{answer}</Typography>

                    <IconButton
                        size="small"
                        onClick={() => onCopy(answer)}
                        sx={{
                            position: 'absolute',
                            top: 7,
                            right: 7,
                            "&:hover": { backgroundColor: 'transparent' }
                        } as const}                    >
                        <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Paper>
            </Box>
        </Box>
    );
};