from django.db import models

import datetime

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=200)
    publicated_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def is_past_due(self):
        return datetime.datetime.now(self.publicated_at.tzinfo) > self.publicated_at