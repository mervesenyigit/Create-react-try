import React, { useEffect } from 'react'

const Card = ({ task, onDelete, onComplete }) => {

    return (
        <>
        <div className={`card-content ${task.completed ? 'completed' : ''}`}>
        <div className="card-content">
        {task.completed && (
          <span className="check-icon">✔</span>
        )}
      
          <h3 className="card-title">{task.text }</h3>
          <div className="card-actions">
          <button
            className="complete-button"
            onClick={onComplete}
          
          >
            {task.completed ? 'Tamamlandı' : 'Tamamla'}
          </button>
          <button className="delete-button" onClick={onDelete}>
            Sil
          </button>
        </div>
        </div>
       
      </div>
        </>
      
    );
  };
export default Card
