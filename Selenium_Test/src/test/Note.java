package test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Note {
	
	public static void afficherNote() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver","C:\\selenium-java-3.141.59\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver ;
		driver= new ChromeDriver();
		 String baseUrl = "http://localhost:3000/";
		 driver.get(baseUrl);
		 driver.findElement(By.id("submit")).click();
		 
		 driver.findElement(By.id("Note")).click();
		 Thread.sleep(3000);
		 driver.close();
	}
	public static void naviguer()
	{
		
	}

}
