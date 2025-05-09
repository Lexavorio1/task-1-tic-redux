import { useState } from "react";
import axios from "axios";

export const useAddTodoList = (setFlags) => {
    const [isCreating, setIsCreating] = useState(false);
    
    const onAdd = async (title) => {
        setIsCreating(true);
        try {
            await axios.post('http://localhost:2016/todos', {
                title: title,
                completed: false
            });
            setFlags();
        } catch (error) {
            console.error('Ошибка при добавлении:', error);
        } finally {
            setIsCreating(false);
        }
    };

    return {
        isCreating,
        onAdd,
    };
};