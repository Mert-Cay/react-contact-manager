import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios"; 
import { useHistory } from "react-router-dom";

const API_URL = 'https://65b36193770d43aba479a2f2.mockapi.io/users';

// 1. Fonksiyon (Hook) haline getirdik
export const useGetContacts = () => {
    return useQuery({
        queryKey: ['contacts'],
        queryFn: () => axios.get(API_URL).then((response) => response.data)
    });
};

// 2. Dışarıdan contactId alacak şekilde fonksiyon yaptık
export const useGetContactDetail = (contactId) => {
    return useQuery({
        // Key içine contactId ekledik ki her kişi için ayrı önbellek olsun
        queryKey: ['contacts', contactId], 
        queryFn: () => 
            axios.get(`${API_URL}/${contactId}`)
                 .then((response) => response.data),
        enabled: !!contactId // Sadece ID varsa çalıştır (Hata almamak için)
    });
};

export const useAddedContacts = () => {
    const queryClient = useQueryClient();
    const history = useHistory();

    return useMutation({
        mutationFn: (newContact) => axios.post(API_URL,newContact),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['contacts']})
            history.push('/');        
        },
        onError: (error) => {
            console.log(error);
        }
        
        
    })
}

export const useDeleteContacts = () => {
    const queryClient = useQueryClient();
    const history = useHistory();
        return useMutation({
            mutationFn: (contactId) => axios.delete(`${API_URL}/${contactId}`),
            onSuccess: () =>{
                queryClient.invalidateQueries({queryKey:["contacts"]})
                history.push('/')
            }
        })
}