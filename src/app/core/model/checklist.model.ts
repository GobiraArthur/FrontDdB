export class ChecklistItem {
  id?: number;         
  descricao?: string;      
  status?: 'C' | 'NC' | 'NA'; // Status do item (C = Concluído, NC = Não Concluído, NA = Não Aplicável)
}