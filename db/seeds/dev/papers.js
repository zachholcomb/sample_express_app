
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('footnotes').del()
    .then(() => knex('papers').del())
    .then(() => {
      return Promise.all([
      // Inserts seed entries
        knex('papers').insert({
          title: 'Foo', author: 'Bob', publisher: 'Minnesota'
        }, 'id')
        .then(paper => { 
          return knex('footnotes').insert([
            { note: 'Lorem', paper_id: paper[0] },
            { note: 'Dolor', paper_id: paper[0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
  .catch(error => console.log(`Error seeding data: ${error}`))
};
