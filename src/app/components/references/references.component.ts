import { Component, Input, OnInit } from '@angular/core';
import { Lexer } from '../../lexer';

@Component({
  selector: 'redd-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit
{
  @Input() references: string[] = [];

  constructor() { }

  ngOnInit(): void
  {
    const lexer: Lexer = new Lexer();
    for (var i = 0; i < this.references.length; i++)
      this.references[i] = lexer.parse(this.references[i]);
  }
}
