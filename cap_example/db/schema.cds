using managed from '@sap/cds/common';
namespace at.clouddna;

entity Book : managed{
    key ID : UUID;
    isbn : String;
    title : String;
    description : String;
    genre : String;
    author : String;
    book_pages : Integer;
    purch_date : Date;
    finished : Boolean;
    rating : Integer;
}

