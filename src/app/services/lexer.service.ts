import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LexerService
{
  private m_Pointer: number = 0;
  
  private m_Output: string = '';
  
  private m_Start: number = 0;

  private m_Source: string = '';

  private m_ActiveTag: string = '';

  private m_Params: string[] = [];

  private m_Param: string = '';

  constructor() { }

  private command(): void
  {
    while (this.peek() != '{' && !this.isAtEnd())
      this.next();
    
    const command = this.m_Source.substr(this.m_Start + 1, this.m_Pointer - this.m_Start - 1);
    
    switch (command)
    {
      case 'par':
        this.m_ActiveTag = 'p';
        break;
    }
  }

  private isAtEnd(): boolean
  { return this.m_Pointer >= this.m_Source.length; }

  private match(c: string): boolean
  {
    if (this.isAtEnd()) return false;
    if (this.peek() != c) return false;
    this.next();
    return true;
  }

  private next(): string
  { return this.m_Source.charAt(this.m_Pointer++); }

  private peek(): string
  { return this.m_Source.charAt(this.m_Pointer); }

  parse(source: string): string
  {
    this.m_Output = '';
    this.m_Source = source;
    this.m_Pointer = 0;

    while (!this.isAtEnd())
    {
      this.m_Start = this.m_Pointer;
      const c = this.next();

      switch (c)
      {
        case '{':
          if (this.m_ActiveTag != '')
            this.m_Output += `<${this.m_ActiveTag}>`;
          this.m_Param = '';
          break;
        
        case '}':
          if (this.m_ActiveTag != '')
            this.m_Output += `</${this.m_ActiveTag}>`;
          this.m_Params.push(this.m_Param);
          
          break;

        case '\\':
          if (this.match('\\')) this.m_Output += '<br>';
          else if (this.match('{')) this.m_Output += '{';
          else if (this.match('}')) this.m_Output += '}';
          else this.command();
          break;

        default:
          if (this.m_ActiveTag != '') this.m_Param += c;
          else this.m_Output += c;
          break;
      }
    }

    return this.m_Output;
  }
}
