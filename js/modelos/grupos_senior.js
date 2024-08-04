import { Grupo } from "./grupo.js";

const rancho_da_saudade = new Grupo('00','CTG Rancho da Saudade','1','Cachoeirinha')
let campeao_anterior = [rancho_da_saudade]

//GRUPOS CABEÇA DE CHAVE  
const querencia_da_serra = new Grupo('01','CTG Querência da Serra','9','Cruz Alta')
const gildo_de_freitas = new Grupo('02','CTG Gildo de Freitas','1','Porto Alegre')
const guapos_do_itapui = new Grupo('03','CTG Guapos do Itapuí','30','Campo Bom')
const ibirapuita = new Grupo('04','GN Ibirapuitã','4','Alegrete')
const pia_do_sul = new Grupo('05','CPF Piá do Sul','13','Santa Maria')
const bocal_de_prata = new Grupo('06','PTG Bocal de Prata','23','Osório')
const luiz_osorio = new Grupo('07','CTG Coronel Thomaz Luiz Osório','26','Pelotas')
const mborore = new Grupo('08',"CTG M'Bororé",'30','Campo Bom')
const aldeia = new Grupo('09','CTG Aldeia dos Anjos','1','Gravataí')

//Lista com os cabeças de chave
export let lista_cabeca = [querencia_da_serra, gildo_de_freitas, guapos_do_itapui, ibirapuita, pia_do_sul, bocal_de_prata, luiz_osorio, mborore, aldeia]

//GRUPOS GERAL
const cftg = new Grupo('11','Centro Farroupilha de Tradições Gaúchas','4','Alegrete')
const alma_gaucha = new Grupo('12','CTF Alma Gaúcha','13','Santa Maria')
const aldeia_farroupilha = new Grupo('13','CTG Aldeia Farroupilha','25','Farrpupilha')
const camacua = new Grupo('14','CTG Camacuã','16','Camaquã')
const campeiros_do_sul = new Grupo('15','CTG Campeiros do Sul','1','Alvorada')
const estancia_da_serra = new Grupo('16','CTG Estância da Serra','23','Osório')
const herois_farroupilha = new Grupo('17','CTG Heróis Farroupilha','25','Caxias do Sul')
const independencia_gaucha = new Grupo('18','CTG Independência Gaúcha','12','Esteio')
const lalau = new Grupo('19','CTG Lalau Miranda','7','Passo Fundo')
const moacyr = new Grupo('20','CTG Moacyr da Motta Fortes','7','Passo Fundo')
const os_farrapos = new Grupo('21','CTG Os Farrapos','26','Pelotas')
const os_gauderios = new Grupo('22','CTG Os Gaudérios','5','Cachoeira do Sul')
const patrulha = new Grupo('23','CTG Patrulha do Rio Grande','23','Santo Antônio da Patrulha')
const porteira_da_tradicao = new Grupo('24','CTG Porteira da Tradição','1','Eldorado do Sul')
const pusada_do_imigrante = new Grupo('25','CTG Pousada do Imigrante','11','Nova Bassano')
const provincia_sao_pedro = new Grupo('26','CTG Província de São Pedro','16','Tapes')
const sentinela_da_querencia = new Grupo('27','CTG Sentinela da Querência','13','Santa Maria')
const taruma = new Grupo('28','CTG Tarumã','18','São Gabriel')
const tiarayu = new Grupo('29','CTG Tiarayú','1','Porto Alegre')
const clube_recreativo = new Grupo('30','DT do Clube Recrativo Juvenil','7','Passo Fundo')
const camboata = new Grupo('31','DTG Camboatá','30','Novo Hamburgo')
const alma_gaucha_dp = new Grupo('32','DTG Alma Gaúcha','18','Dom Pedrito')
const juventude = new Grupo('33','DTG Juventude de Alegrte','4','Alegrete')
const anita = new Grupo('34','GAN Anita Garibaldi','24','Encantado')
const uniao = new Grupo('35','União Gaúcha João Simões de Lopes Neto','26','Pelotas')

//Lista com os grupos geral
export let lista_geral = [cftg, alma_gaucha, aldeia_farroupilha, campeiros_do_sul, estancia_da_serra, herois_farroupilha, independencia_gaucha, lalau, moacyr, os_farrapos, os_gauderios, patrulha, porteira_da_tradicao, pusada_do_imigrante, provincia_sao_pedro, sentinela_da_querencia, taruma, clube_recreativo, camboata, alma_gaucha_dp, juventude, anita, uniao, tiarayu, camacua]

let arrayProvisorio = campeao_anterior.concat(lista_cabeca)

//Lista com TODOS os grupos
export let lista_total = arrayProvisorio.concat(lista_geral)

