from django.db import models


class Organisation_type(models.Model):
    id = models.AutoField(primary_key=True)
    label = models.CharField(max_length=100)

    def __str__(self):
        return self.label
    


class OrganisationManager(models.Manager):

    def get_all_organisations(self):
        return self.all()
    

    def get_organisation_by_department(self, department):
        return self.filter(departement=department)
    

    def get_organisation_by_region(self, region):
        return self.filter(region=region)
    

    def get_organisation_by_type(self, type):
        return self.filter(type=type)
    

    def update_organisation(self, organisation_id, full_name, acronyme, type, address, city, departement, region):
        organisation = self.get(organisation_id=organisation_id)
        organisation.full_name = full_name
        organisation.acronyme = acronyme
        organisation.type = type
        organisation.address = address
        organisation.city = city
        organisation.departement = departement
        organisation.region = region
        organisation.save()
        return organisation
    


    def delete_organisation(self, organisation_id):
        organisation = self.get(organisation_id=organisation_id)
        organisation.delete()
        return organisation
    

    def create_organisation(self, full_name, acronyme, type, address, city, departement, region):
        organisation = self.create(
            full_name = full_name,
            acronyme = acronyme,
            type = type,
            address = address,
            city = city,
            departement = departement,
            region = region
            )
        return organisation
    

    


class Organisation(models.Model):
    organisation_id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=50)
    acronyme = models.CharField(max_length=10)
    type = models.ForeignKey(Organisation_type, on_delete=models.CASCADE)
    address = models.CharField(max_length = 150)
    city = models.CharField(max_length = 50)
    departement = models.CharField(max_length = 50)
    region = models.CharField(max_length = 50)

    objects = OrganisationManager()

    def __str__(self):
        return str(self.organisation_id) + ' => ' + self.full_name + ' | ' + self.acronyme
    

