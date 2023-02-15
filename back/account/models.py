from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from organisation.models import Organisation
# from django.apps import apps

# organisation = apps.get_model('organisation', 'Organisations')

class AccountManager(BaseUserManager):

    def create_account(self, email, username, password, first_name, last_name, telephone, affiliate_to):
        if not email:
            raise ValueError('account must have an email address')
        if not username:
            raise ValueError('account must have a username')
        if not password:
            raise ValueError('account must have a password')
        # if not first_name:
        #     raise ValueError('users must have a first name')
        # if not last_name:
        #     raise ValueError('users must have a last_name')
        if not telephone:
            raise ValueError('account must have a telephone')
        # if not affiliate_to:
        #     raise ValueError('users must have a affiliate_to')
        # affiliate_to_obj = Organisation.objects.get(organisation_id=affiliate_to)
        account = self.model(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name,
            telephone=telephone,
            affiliate_to=affiliate_to
        )

        account.set_password(password)

        account.save(using=self._db)
        return account
    
    # Create a superuser
    def create_superuser(self, email, username, *args, **kwargs):
        orga = Organisation.objects.get(organisation_id=2)
        account = self.model(
            is_superuser=True,
            is_staff=True,
            is_active=True,
            email=self.normalize_email(email),
            username=username,
            # password="gui10tare",
            first_name="phiphi",
            last_name="martinez",
            telephone="0698844186",
            affiliate_to=orga
        )

        account.is_admin = True
        account.is_staff = True
        account.is_superuser = True
        account.set_password("gui10tare")
        account.save(using=self._db)
        return account

    def delete_account(self, account_id):
        account=self.get(account_id=account_id)
        account.delete()
        return account


    def update_account(self, account_id, email, username, password, first_name, last_name, telephone, affiliate_to):
        account=self.get(account_id=account_id)
        account.email=email
        account.username=username
        account.password=password
        account.first_name=first_name
        account.last_name=last_name
        account.telephone=telephone
        account.affiliate_to=affiliate_to
        account.save()
        return account
    
    def get_account_by_username(self, username):
        return self.get(username=username)



class Account(AbstractUser):
    account_id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=150)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    telephone = models.CharField(max_length=15)
    affiliate_to = models.ForeignKey(Organisation, on_delete=models.CASCADE, null=False)

    objects = AccountManager()

    USERNAME_FIELD = 'username'
    PASSWORD_FIELD = 'password'


    def __str__(self):
        return str(self.account_id) + ' => ' + self.username + ' | ' + self.email
