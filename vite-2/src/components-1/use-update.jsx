import { useState } from "react";
import axios from "axios";

export const useUpdate = (setFlags) => {
    const [isUpdating, setIsUpdating] = useState(false);
    
    const onUpdate = async (id, title) => {
        const newTitle = prompt("Введите новый текст дела", title);
        
        if (newTitle && newTitle.trim() !== "") {
            setIsUpdating(true);
            try {
                await axios.put(`http://localhost:2016/todos/${id}`, {
                    title: newTitle
                });
                setFlags();
            } catch (error) {
                console.error('Ошибка при обновлении:', error);
            } finally {
                setIsUpdating(false);
            }
        }
    };

    return { 
        isUpdating, 
        onUpdate 
    };
};