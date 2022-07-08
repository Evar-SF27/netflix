import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../lib/firebaseProd';

export default function UseContent(target) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, target)
        const getData = async() => {
            try {
                const data = await getDocs(collectionRef)
                const data_members = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setContent(data_members)
                console.log(content)
            }catch(err){
                console.log(err.message)
            } 
        }
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return { [target]: content};
}

