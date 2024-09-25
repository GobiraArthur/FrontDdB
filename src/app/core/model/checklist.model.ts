export class ChecklistItem {
    id?: number;  // O ID pode ser opcional, pois pode não existir antes de salvar o item
    name?: string; // Nome do item do checklist
    status?: string; // Status do item (C, NC, NA)
  }
  