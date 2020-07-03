from django.contrib import admin

from .models import Lesson

admin.site.register(Lesson)

class LessonAdmin(admin.ModelAdmin):
    # ...
    list_display = ('title', 'publicated_at')