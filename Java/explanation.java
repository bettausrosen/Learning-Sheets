// Java Guide for Application Development
// Covers: Syntax, OOP, Collections, and Basic Tooling

import java.util.*;

public class explanation {
    // 1. Basic Types
    static boolean isDone = false;
    static int decimal = 6;
    static String color = "blue";
    static int[] list = {1, 2, 3};
    static Object[] tuple = {"hello", 10}; // Java doesn't support tuples natively

    // 2. Main Method (Entry Point)
    public static void main(String[] args) {
        System.out.println("Java Guide");

        // 3. Functions
        System.out.println(addition(5, 3));
        greet("Alice");

        // 4. OOP
        Person p = new Person("Bob", 25);
        System.out.println(p.greet());

        // 5. Collections
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");

        Map<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);

        // 6. Exception Handling
        try {
            throwError("Test error");
        } catch (Exception e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }

    // 7. Functions
    public static int addition(int x, int y) {
        return x + y;
    }

    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void throwError(String message) throws Exception {
        throw new Exception(message);
    }
}

// 8. Interfaces
interface Greetable {
    String greet();
}

// 9. Classes
class Person implements Greetable {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String greet() {
        return "Hi, I'm " + name;
    }

    // 10. Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}

// Additional Notes:
// - Java is statically typed and object-oriented
// - Used for Android apps, enterprise software, web backends
// - Requires JDK to compile (javac Explanation.java)
// - Run with java Explanation
// - Popular frameworks: Spring, Hibernate, Jakarta EE