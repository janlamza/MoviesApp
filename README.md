# MoviesApp
<!-- ABOUT THE PROJECT -->
## O Projektu

Kolegij Projekt RWA (Razvoj web aplikacija). Cilj projekta bio je implementacija web aplikacije  
koja služio kao stranica za skidanje filmova, odnosno Torrenta.  
Aplikacija sadrži 2 logički i fizički razdvojena dijela Client stranu (**Angular**) te Server stranu (**.NET**).  
  
### Ideja :  
* Server strana šalje API , client strana ga hvata, obrađuje i prikazuje 
* Server sadrži **model** i **controller** , client sadrži **view** 

### Aplikacija omogućuje :
* Authentication (Microsoft Identity)
* Authorization (Admin, Member, Moderator role)
* CRUD operacije 
* Search bar 
* Movie genre filter  

  
Dok se korisnik ne logira ne može preuzeti torrent link, ali može koristiti tražilicu i vidjeti informacije pojedninog filma.  
 Korisnik postaje autentičan nakon logiranja. Običan korisnik (Member) može samo preuzeti torrent. Moderator može editat film  
 dok admin može osim prethodnog i dodavat film.    
 <br/>
 ### Korištene tehnologije :
 * Angular (10.2.0 + Node 12.19.0)
 * .NET (5.0.100 SDK --> 5.0.0 Rutime)
   * Entity framework ( 5.0.0)
   * SqlServer ( 5.0.0)
   * JwtBearer ( 5.0.0)
 * HTML, CSS, Font Awesome, Toastr service, Ngx-Bootstrap ...
 * Postman 
  
  ## Preview
![](https://github.com/jlamza/MoviesApp/blob/master/MyMoviesApp%20-%20Google%20Chrome%202021-01-05%2001-06-39.gif?raw=true)
  
  <!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
