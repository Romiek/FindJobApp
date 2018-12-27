import { PersonSchema } from '../schemas/AllSchemas';

let repository = new Realm({
    schema: [PersonSchema],
    schemaVersion: 2.1
});

class PersonService  {
    
    static findAll() {
        return repository.objects(PersonSchema.name);
    }

    static findUser(UserName) {
        let persons = repository.objects(PersonSchema.name);
        
        let person = persons.filtered(`UserName="${UserName}"`);
        let pers = person[0];
        return pers;
    }

    static signUp(formstate) {
        repository.write(() => {
            repository.create(PersonSchema.name, {
                UserName: formstate.UserName,
                FirstName: formstate.FirstName,
                LastName: formstate.LastName,
                Email: formstate.Email,
                Password: formstate.Password,
                });
        });
    }
}

export default PersonService;