﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class LogiDons : DbContext
    {
        public LogiDons()
            : base("name=LogiDons")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<article> articles { get; set; }
        public virtual DbSet<beneficiare> beneficiares { get; set; }
        public virtual DbSet<category> categories { get; set; }
        public virtual DbSet<donArticle> donArticles { get; set; }
        public virtual DbSet<don> dons { get; set; }
        public virtual DbSet<livraisonDonArticle> livraisonDonArticles { get; set; }
        public virtual DbSet<livraison> livraisons { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<utilisateur> utilisateurs { get; set; }
    }
}
