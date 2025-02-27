import { Component, OnInit } from '@angular/core';
import { FarmerStoryService } from 'src/app/admin/services/farmer-story.service';
import { FarmerStory } from 'src/model/FarmerStory';

@Component({
  selector: 'app-ks',
  templateUrl: './ks.component.html',
  styleUrls: ['./ks.component.scss']
})
export class KsComponent implements OnInit {
  stories: FarmerStory[] = [];
  newStory: FarmerStory = { storyTitle: '', storyDetails: '', imageUrl: '', struggles: '' };
  selectedStory: FarmerStory | null = null;

  constructor(private farmerStoryService: FarmerStoryService) {}

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories(): void {
    this.farmerStoryService.getStories().subscribe(
      (data) => {
        this.stories = data;
      },
      (error) => {
        console.error('Error loading stories:', error);
      }
    );
  }

  addStory(): void {
    this.farmerStoryService.addStory(this.newStory).subscribe(
      () => {
        this.newStory = { storyTitle: '', storyDetails: '', imageUrl: '', struggles: '' }; // Clear form
        this.loadStories(); // Refresh the list
      },
      (error) => {
        console.error('Error adding story:', error);
        alert('Failed to add story. Please try again.');
      }
    );
  }

  openFullDetails(story: FarmerStory): void {
    this.selectedStory = story; // Open modal with full details
  }

  closeModal(): void {
    this.selectedStory = null; // Close modal
  }

  deleteStory(id: number): void {
    this.farmerStoryService.deleteStory(id).subscribe(
      () => {
        this.loadStories(); // Refresh the list
      },
      (error) => {
        console.error('Error deleting story:', error);
        alert('Failed to delete story. Please try again.');
      }
    );
  }
}
