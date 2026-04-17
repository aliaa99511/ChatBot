import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { askQuestion, type AppDispatch, type RootState } from '../store';

export const useChat = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const { messages, loading } = useSelector((state: RootState) => state.chat);

    const sendMessage = () => {
        if (!input.trim()) return;
        dispatch(askQuestion(input));
        setInput('');
    };

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return {
        input,
        setInput,
        messages,
        loading,
        sendMessage,
        copyText,
        isEmpty: messages.length === 0
    };
};