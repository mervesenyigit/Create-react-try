import React, { useState } from 'react'
import Button from '././Button';

function FavoriteBookList() {
    const[formData,setFormData]=useState(  []

    )
    
    const[book,setBook]=useState("");
    const[author,setAuthor]=useState("");

    function addBook(e) {
        e.preventDefault();
        setFormData([

            ...formData,
            { bookName: book, authorName: author 
        }
        ]);

        setBook('');
        setAuthor('');
    }
 
  return (
    <div>
       <h1 style={{ color:'#BAD94A' }} >Book List</h1>
          <div>
            <form onSubmit={addBook} id='form'> 
                <div>
                <input
                    type="text"
                    placeholder="Add New Book"
                    name='book'
                    value={book}
                    onChange={(e) => setBook(e.target.value)}
                    style={{ width: '70%', padding: '10px', marginRight: '10px' }}
            />
                </div>
                <div>
                <input
                        type="text"
                        placeholder="Add Author "
                        name='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        style={{ width: '70%', padding: '10px', marginRight: '10px', marginBottom:'20px'}}
                        />
                </div>
          
      
           
            <Button onClick={addBook} backgroundColor="#BAD94A"  color="white" cursor="pointer">
              Ekle
            </Button>
            </form>
            <ul>
                {formData.map((item, index) => (
                    <li key={index}>
                        {item.bookName} - {item.authorName}
                    </li>
                ))}
            </ul>
            
    </div>
    </div>

  )
}

export default FavoriteBookList
