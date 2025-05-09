import { useState } from "react";
import axios from "axios";

export const useDelete = (setFlags) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    const onDelete = async (id) => {
        setIsDeleting(true);
        try {
            await axios.delete(`http://localhost:2016/todos/${id}`);
            console.log('Дело удалено');
            setFlags();
        } catch (error) {
            console.error('Ошибка при удалении:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    return { 
        isDeleting, 
        onDelete 
    };
};