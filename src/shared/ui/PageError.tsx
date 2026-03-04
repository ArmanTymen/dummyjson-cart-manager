
export const PageError = () => {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '20px' 
    }}>
      <h2>Упс! Что-то пошло не так.</h2>
      <p>Не удалось загрузить модуль страницы. Проверьте соединение с интернетом.</p>
      <button 
        onClick={() => window.location.reload()}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Обновить страницу
      </button>
    </div>
  );
};