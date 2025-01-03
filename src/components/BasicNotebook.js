import React, { useEffect,useState } from 'react'
// import Card from './Card';
import Button from '././Button';

function BasicNotebook() {
    const[notes, setNotes]=useState(() =>{
        
           
            const savedNotes = localStorage.getItem('notes');
            return savedNotes ? JSON.parse(savedNotes) : [];
          });
    
    const[newNote,setNewNote]=useState('');
    const [noteLabel, setNoteLabel] = useState('');

    const labelKeywords = {
        "React": ["react", "javascript", "frontend", "web"],
        "Yazilim": ["yazilim", "programlama", "kod", "developer"],
        "Eğitim": ["öğren", "ders", "eğitim", "konferans"],
        "İngilizce": ["İngilizce", "ingilizdil", "ingilizders","kelime"],
        "Arapça": ["Arapça", "dil","nahiv",],
        "Sanat" :["hat","resim"],
        "Spor" :["basketbol","yürüme","Yürüyüş",],
        "Din" :["namaz","kuran","hadis",],
      };
      
      const getLabel = (noteText) => {
        let label = "Genel";
        for (const [labelKey, keywords] of Object.entries(labelKeywords)) {
          console.log(labelKey, keywords);  
          if (keywords.some(keyword => noteText.toLowerCase().includes(keyword))) {
            label = labelKey; 
          }
        }
        return label;
      };
      
      const addNote = () => {
        const label = getLabel(newNote);
        const updatedNotes = [...notes, { text: newNote, label }];
        setNotes(updatedNotes);
        setNewNote('');
      };
    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
       setNotes(updatedNotes);
      
    };
            // Notes state'i her güncellendiğinde localStorage'a kaydet
            useEffect(() => {
                localStorage.setItem('notes', JSON.stringify(notes));
            }, [notes]);


    return (
        <div style={{ zIndex:'122' , padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
          <h1 style={{ color:'#BAD94A' }} >Not Defteri</h1>
          <div>
            <input
              type="text"
              placeholder="Yeni not yaz..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              style={{ width: '70%', padding: '10px', marginRight: '10px' }}
            />
           
            <Button onClick={addNote} backgroundColor="#BAD94A"  color="white" cursor="pointer">
              Ekle
            </Button>
          </div>
         
          <div>
          <ul style={{ marginTop: '20px', listStyle: 'none', padding: '0' }}>
        {notes
          .filter(note => note.text.trim() !== '') 
          .map((note, index) => (
        
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:'center',
                marginBottom: '10px',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
                   <div>
              <strong>{note.label}</strong> 
            </div>
              {note.text}  
           
              <Button
                onClick={() => deleteNote(index)}
           backgroundColor="#FAC47D" 
           color="white"
           cursor="pointer"
           
              >
                Sil
              </Button>
            </li>
          ))}
      </ul>
  



        </div>
        </div>
      );
}

export default BasicNotebook
