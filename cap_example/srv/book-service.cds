using { at.clouddna as my } from '../db/schema'; //import the data model - schema and also alias for namespace is created

service BookService @(path:'/bookservice') { //here we are creating path for this service - this will be helpful if multiple services
//implementing a service service <servicename> {Definitions}

    entity Book as projection on my.Book; //projection of Book in schema.cds
    //instead of using projection on - we can use SELECT and give only the list of files that we need

}

annotate BookService.Book with @(
    UI:{
        LineItem  : [
            {Value:ID},
            {Value:isbn},
            {Value:title},
            {Value:description}
        ],
    }
) ;

