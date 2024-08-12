export function mensagem_de_sucesso(){
  Swal.fire({
      icon: "success",
      showConfirmButton: false,
      text: "Sorteio realizado com sucesso!",
      timer: 2000,
      background: '#b6d7a8',
      iconColor: '#38761d',
      color: '#000000',
      width: 350
    });
}

export function mensagem_do_grupo(grupo, numero){
  Swal.fire({
    title: grupo,
    text: `Inscrição: ${numero}`,
    width: 800,
    background: '#002bb1',
    color: '#ffffff',
  });
}